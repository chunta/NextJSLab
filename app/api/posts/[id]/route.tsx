// http://localhost:3000/api/posts/1
import { NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/posts";

export const GET = async (_, {params}) => {
    const id = params.id;
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({message: error.message});
    }
};