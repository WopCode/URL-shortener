import { NextResponse } from "next/server";
import Link from "@/models/date";
import { connectDB } from "@/db/mongodb";

export async function GET(req, { params }) {
    try {
        connectDB();
        // const data = await Link.findById(params.id);
        const urlShort = params.id;
        const data = await Link.findOne({ urlShort });

        if (!data)
            return NextResponse.redirect(
                new URL("/nt/not-found", req.url)
            );

        return NextResponse.redirect(new URL(data.urlPrimary, req.url));
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}
