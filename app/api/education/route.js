import client from "../../libs/prismadb";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
        const body = await req.json();
        const { startDate,
            endDate,
            institution,
            diploma, } = body;
        const newPost = await client.education.create({
            data: {
                startDate,
                endDate,
                institution,
                diploma,
            },
        });
        return NextResponse.json(newEducation);
    } catch (error) {
        return NextResponse.json(
            { message: "Error creating education ", error },
            { status: 500 }
        );
    }
};

export const GET = async () => {
    try {
        const experience = await client.education.findMany();
        return NextResponse.json(experience);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error getting education", error: error.message },
            { status: 500 }
        );
    }
}

export const FETCH = async () => {
    return await GET();
}