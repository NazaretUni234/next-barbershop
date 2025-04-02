import { getAllBarbers } from "@/models/barbers";
import { NextResponse } from "next/server";

export async function GET() {
  const barbers = await getAllBarbers();
  return NextResponse.json(barbers);
}
