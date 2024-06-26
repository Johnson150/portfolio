import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/post

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, level } = body;
        const newSkills = await client.skills.create({
            data: {
                name,
                level,
            },
        });
        return NextResponse.json(newSkills);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error creating player", error: error.message },
        );
    }
};

export const GET = async () => {
    try {
        const skills = await client.skills.findMany();
        return NextResponse.json(skills);
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
