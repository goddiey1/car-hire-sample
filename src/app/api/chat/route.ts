import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { systemPrompt, knowledgeBase } from '@/data/knowledge';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API Key is not configured on the server.' },
        { status: 500 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Assemble the final prompt by combining the knowledge base and the user's message
    const finalPrompt = `
${systemPrompt}

Here is the knowledge base you should use to answer the user's query:
${knowledgeBase}

User Query: ${message}
`;

    // Call Gemini
    const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: finalPrompt,
    });

    return NextResponse.json({ reply: response.text });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while communicating with the AI.' },
      { status: 500 }
    );
  }
}
