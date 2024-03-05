"use client";

import { IconLocationFilled, IconCopy } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import HelpUrl from "@/components/helpUrl";

export default function Home() {
    const inputRef = useRef();
    const [showDetail, setShowDetail] = useState(false);
    const [newUrl, setNewUrl] = useState({
        urlPrimary: "",
        urlShort: "",
        urlPm: "",
    });
    const urlMain = "http://localhost:3000/";

    // Funcion para llamar a la funcion de crear con la url corta
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUrl();
    };

    // funcion para capturar los datos del form y guardarlo en un set
    const handleChange = (e) =>
        setNewUrl({ ...newUrl, [e.target.name]: e.target.value });

    // funcion para limpiar el input y mostrar el resultado del acortador
    const handleClick = () => {
        inputRef.current.value = "";
        if (!showDetail) {
            setShowDetail(true);
        }
    };

    // Funcion para crear con la url original un url corto
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
                    urlPm: dataURL.urlPrimary,
                    urlShort: dataURL.urlShort,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetch("/api/shorten");
        console.log(process.env.DATABASE_URL);
    }, []);

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
                        ref={inputRef}
                        type="text"
                        name="urlPrimary"
                        className="mt-5 px-4 py-3 bg-white border border-slate-300 focus:outline-none rounded-lg sm:text-sm w-full"
                        placeholder="https://www.google.com/"
                        onChange={handleChange}
                    />
                    <div className="flex justify-center items-center mb-20">
                        <button
                            id="btnSave"
                            name="btnSave"
                            type="submit"
                            className="px-4 py-2 bg-blacked text-white rounded-lg font-bold mt-5 flex hover:bg-white hover:text-blacked border-solid border-white border-2"
                            onClick={handleClick}
                        >
                            <IconLocationFilled width={20} height={20} />
                            <div className="pl-2">Shorten</div>
                        </button>
                    </div>
                </form>
                {showDetail && (
                    <>
                        <div className="text-white flex justify-evenly  text-1xl font-normal w-full pb-5">
                            <Link href="">{newUrl.urlPm}</Link>
                        </div>
                        <div className="text-white flex justify-evenly  text-2xl font-normal w-full pb-20">
                            <Link
                                href={`${urlMain}${newUrl.urlShort}`}
                                className="underline decoration-1"
                            >
                                {urlMain}
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
                    </>
                )}
            </div>

            <HelpUrl />
            <Footer />
        </>
    );
}
