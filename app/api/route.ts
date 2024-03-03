import { NextResponse } from "next/server";
import { IImage } from "@/types";
const DATA_SOURCE_URL = `https://api.unsplash.com/photos?client_id=${process.env.API_KEY}&per_page=2`;

export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data from Unsplash API");
  }
  const data: IImage[] = await response.json();
  return NextResponse.json(data);
}
