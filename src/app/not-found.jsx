import Navbar from "@/components/navbar";
import React from "react";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section className="h-[calc(100vh-7rem)] flex items-center justify-center flex-col">
                <h1 className="text-7xl font-bold block">404</h1>
                <p className="text-slate-300 my-5 text-3xl">Page not found</p>
            </section>
        </>
    );
}
export async function getServerSideProps(context) {
    return {
        notFound: true,
        props: {},
    };
}
