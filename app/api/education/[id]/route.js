
import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


// url: http://localhost:3000/api/education/

// get function handles GET requests to return posts (used for search) 
export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const education = await client.education.findUnique({
            where: {
                id
            }
        });
        if (!education) {
            return NextResponse.json({ status: 404 }, { message: "education not found" })
        }
        return NextResponse.json(education);
    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error getting education", error })

    }
}

// Patch function handles PATCH requests to perform updates (used for editing data)
export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { id } = params;
        const { startDate,
            endDate,
            institution,
            diploma, } = body;
        // updates the player in the database
        const updateEducation = await client.education.update({
            where: {
                id
            },
            data: {
                startDate,
                endDate,
                institution,
                diploma,
            }
        });
        // if the player is not found, return a 404 status
        if (!updateEducation) {
            return NextResponse.json({ status: 404 }, { message: "Education not found" })
        }
        return NextResponse.json(updateEducation);

    } catch (error) {
        return NextResponse.json({ status: 500 }, { message: "Error updating Education", error })
    }
}




export const FETCH = async () => {
    return await GET();
}

