import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json("obteniendo tareas");
}
export function POST() {
    return NextResponse.json("creando tareas");
}