import { OpenAIStream } from "@/utils";
import { NextResponse } from "next/server";

export const config = {
    runtime: "edge",
};

export default async function handler(req, res) {
    try {
        const { inputLanguage, outputLanguage, inputCode } = await req.json();
        const stream = await OpenAIStream(
            inputLanguage,
            outputLanguage,
            inputCode
        );
        // return new Response(stream);
        return NextResponse.json({
            stream,
        });
    } catch (error) {
        console.log(error.toString());
    }
}
