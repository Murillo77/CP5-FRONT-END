// api https://api.nasa.gov/

import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=Me0PNGB9gJ7h9x56TqOhZgBsyGb5N2sUKQ3dG47y");
    const json = await response.json();

    return NextResponse.json(json);
}