import { NextResponse } from "next/server";
import Link from "@/models/date";
import { connectDB } from "@/db/mongodb";

export async function GET() {
    await connectDB();
    try {
        const data = await Link.find();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}

export async function POST(request) {
    try {
        const { urlPrimary } = await request.json();
        const urlShort = Math.random().toString(36).substr(2, 7);
        const short = new Link({ urlPrimary, urlShort });
        const save = await short.save();
        return NextResponse.json(save);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}
