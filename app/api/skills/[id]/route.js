
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


// url: http://localhost:3000/api/education/

// get function handles GET requests to return posts (used for search) 
export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const skills = await client.skills.findUnique({
            where: {
                id
            }
        });
        if (!skills) {
            return NextResponse.json({ status: 404 }, { message: "Skills not found" })
        }
        return NextResponse.json(skills);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error getting skills", error })

    }
}

// Patch function handles PATCH requests to perform updates (used for editing data)
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { name } = body;
        // updates the player in the database
        const updateSkills = await client.skills.update({
            where: {
                id
            },
            data: {
                name,
                level
            }
        });
        // if the player is not found, return a 404 status
        if (!updateSkills) {
            return NextResponse.json({ status: 404 }, { message: "Skills not found" })
        }
        return NextResponse.json(updateSkills);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating skills", error })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await client.skills.delete({
            where: {
                id
            }
        });
        return NextResponse.json({ status: 200 }, { message: "skill deleted" });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return NextResponse.json({ status: 500 }, { message: "Error deleting skill", error });
    }
};


export const FETCH = async () => {
    return await GET();
}

