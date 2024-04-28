import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/post

// function to handle POST requests to create a new player data, returns new player if successful, or an error message if not
export const POST = async (req) => {
    try {
        const body = await req.json();
        const { startDate,
            endDate,
            institution,
            diploma, } = body;
        const newEducation = await client.education.create({
            data: {
                startDate,
                endDate,
                institution,
                diploma,
            },
        });
        return NextResponse.json(newEducation);
    } catch (error) {
        console.error(error); //error details in the server logs
        return NextResponse.json(
            { message: "Error creating player", error: error.message },
        );
    }
};

// function to handle GET requests to return all players, used to display all players
export const GET = async () => {
    try {
        const education = await client.education.findMany();
        return NextResponse.json(education);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting players", error: error.message },
            { status: 500 }
        );
    }
}

// fetches players by using the GET function
export const FETCH = async () => {
    return await GET();
}
