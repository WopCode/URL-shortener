"use client";

import { IconLocationFilled, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HelpUrl from "@/components/helpUrl";

export default function Home() {
    const [showDetail, setShowDetail] = useState(false);
    const [newUrl, setNewUrl] = useState({ urlPrimary: "", urlShort: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUrl();
    };

    const handleChange = (e) =>
        setNewUrl({ ...newUrl, [e.target.name]: e.target.value });
    const handleClick = () => {
        setShowDetail(!showDetail);
    };

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
                setNewUrl({
                    urlPrimary: dataURL.urlPrimary,
                    urlShort: dataURL.urlShort,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center flex-wrap w-full bg-blacked">
                <form
                    className="bg-state-800 pt-20 w-10/12"
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
                        <button
                            className="px-4 py-2 bg-blacked text-white rounded-lg font-bold mt-5 flex hover:bg-white hover:text-blacked border-solid border-white border-2"
                            onClick={handleClick}
                        >
                            <IconLocationFilled width={20} height={20} />
                            <div className="pl-2">Shorten</div>
                        </button>
                    </div>
                </form>
                {showDetail && (
                    <div className="text-white flex justify-evenly  text-2xl font-normal w-full pb-20">
                        <Link
                            href={`http://localhost:3000/${newUrl.urlShort}`}
                            className="underline decoration-1"
                        >
                            http://localhost:3000/
                            {newUrl.urlShort}
                        </Link>
                        <button title="Copy">
                            <IconCopy
                                width={23}
                                height={23}
                                className="hover:bg-white hover:text-blacked rounded-md"
                            />
                        </button>
                    </div>
                )}
            </div>

            <HelpUrl />
            <Footer />
        </>
    );
}
