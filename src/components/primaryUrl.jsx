"use client";
import React from "react";
import { IconLocationFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PrimaryUrl() {
    const router = useRouter();

    const [newUrl, setNewUrl] = useState({
        urlPrimary: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUrl();
    };

    const handleChange = (e) =>
        setNewUrl({ ...newUrl, [e.target.name]: e.target.value });

    const createUrl = async () => {
        try {
            const res = await fetch("/api/shorten", {
                method: "POST",
                body: JSON.stringify(newUrl),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const dataURL = await res.json();

            if (res.status === 200) {
                router.push("/short");
                console.log(dataURL);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center  w-full bg-blacked">
                <form
                    className="bg-state-800 p-10 w-10/12"
                    onSubmit={handleSubmit}
                >
                    <div className="text-center text-white pt-10 pb-5 text-6xl font-medium tracking-widest">
                        Link Shortener
                    </div>
                    <input
                        type="text"
                        name="urlPrimary"
                        className="mt-5 px-4 py-3 bg-white border border-slate-300 focus:outline-none rounded-lg sm:text-sm w-full"
                        placeholder="https://www.google.com/"
                        onChange={handleChange}
                    />
                    <div className="flex justify-center items-center mb-20">
                        <button className="px-4 py-2 bg-blacked text-white rounded-lg font-bold mt-5 flex hover:bg-white hover:text-blacked border-solid border-white border-2">
                            <IconLocationFilled width={20} height={20} />
                            <div className="pl-2">Shorten</div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
