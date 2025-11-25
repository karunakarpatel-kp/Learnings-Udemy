import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_A_KEY = process.env.GEMINI_AI_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_A_KEY);

const callGeminiAI = async () => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent("Why is the sky blue in color?");

  console.log(result.response.text());
};

callGeminiAI();
