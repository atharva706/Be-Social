
import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware.js";
import { GoogleGenAI } from "@google/genai";

// Generate post
// POST /api/posts/generate
export const generatePost = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { prompt, tone, generateImage } = req.body;

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            res.status(400).json({ message: 'Gemini api key is missing please add it to your server/.env file' });
            return;
        }

        const ai = new GoogleGenAI({ apiKey });

        const textResponse = await ai.interactions.create({
            model: "gemini-2.5-flash",
            input: `Generate a social media post based on this prompt: "${prompt}".
                    Tone: ${tone}.Include relevant hashtags. Format the response as JSON with "content" and "imagePrompt" fields.
                     The "imagePrompt" should be a highly descriptive prompt for an image generator
                     that complements the post.`,
        });

        let content = "";
        let imagePrompt = prompt;

        try {
            const rawText = textResponse.output_text || "";
            const jsonMatch = rawText.match(/\{[\s\S]*\}/);
            const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { content: rawText, imagePrompt: prompt };
            content: data.content;
            imagePrompt: data.imagePrompt;
        } catch (e) {
            content = textResponse.output_text || ""
        }   

        let mediaUrl = "";
        if(generateImage){
             try {
                
             } catch (error) {
                
             }
        }


    }
    catch (error) {

    }
}




// get generations
// GET /api/posts/generations
export const getGenerations = async (req: AuthRequest, res: Response): Promise<void> => {

}

// get post
// GET /api/posts
export const getPosts = async (req: AuthRequest, res: Response): Promise<void> => {

}

// schedule post
// POST /api/schedule
export const schedulePosts = async (req: AuthRequest, res: Response): Promise<void> => {

}

