import { NextResponse } from "next/server";
import Link from "@/models/date";
import { connectDB } from "@/db/mongodb";

export async function GET(request, { params }) {
    try {
        connectDB();
        const data = await Link.findById(params.id);

        if (!data)
            return NextResponse.json(
                {
                    message: "Not found",
                },
                {
                    status: 404,
                }
            );
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        const update = await Link.findByIdAndUpdate(params.id, data, {
            new: true,
        });
        return NextResponse.json(update);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}

export async function DELETE(request, { params }) {
    try {
        const delet = await Link.findByIdAndDelete(params.id);
        if (!delet)
            return NextResponse.json(
                {
                    message: "Not found",
                },
                {
                    status: 404,
                }
            );
        return NextResponse.json({ message: "eliminado" });
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 });
    }
}
