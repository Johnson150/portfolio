
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


// url: http://localhost:3000/api/experience/

// get function handles GET requests to return posts (used for search) 
export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const experience = await client.experience.findUnique({
            where: {
                id
            }
        });
        if (!experience) {
            return NextResponse.json({ status: 404 }, { message: "Experience not found" })
        }
        return NextResponse.json(experience);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "error getting experience", error })

    }
}

// Patch function handles PATCH requests to perform updates (used for editing data)
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { startDate,
            endDate,
            company,
            position,
            description, } = body;
        // updates the player in the database
        const updateExperience = await client.experience.update({
            where: {
                id
            },
            data: {
                startDate,
                endDate,
                company,
                position,
                description
            }
        });
        // if the player is not found, return a 404 status
        if (!updateExperience) {
            return NextResponse.json({ status: 404 }, { message: "Experience not found" })
        }
        return NextResponse.json(updateExperience);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating Experience", error })
    }
}


export const FETCH = async () => {
    return await GET();
}

