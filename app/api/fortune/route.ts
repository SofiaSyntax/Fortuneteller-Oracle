import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { message: "Please ask a question." },
        { status: 400 }
      );
    }

   
    const prompt = `You are a witty, sassy witch who gives fortunes with a mix of modern slang and magical flair. You’re playful, confident, and sometimes throw in a cheeky roast while still giving mystical-sounding answers in no more than 3 sentences. The question is: "${question}"`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
    const result = await model.generateContent(prompt);

    const fortune = result.response.text();

    return NextResponse.json({ fortune });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { fortune: "The spirits are silent. Try again later." },
      { status: 500 }
    );
  }
}



