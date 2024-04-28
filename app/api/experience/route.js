import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/post

// function to handle POST requests to create a new player data, returns new player if successful, or an error message if not
export const POST = async (req) => {
    try {
        const body = await req.json();
        const { startDate,
            endDate,
            company,
            position,
            description, } = body;
        const newExperience = await client.experience.create({
            data: {
                startDate,
                endDate,
                company,
                position,
                description,
            },
        });
        return NextResponse.json(newExperience);
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
        const experience = await client.experience.findMany();
        return NextResponse.json(experience);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting experience", error: error.message },
            { status: 500 }
        );
    }
}

// fetches players by using the GET function
export const FETCH = async () => {
    return await GET();
}
