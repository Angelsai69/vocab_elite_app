import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// 🎯 Generate lesson
app.post("/generate", async (req, res) => {
  const { words, level, style } = req.body;

  try {
    // 1. Story
    const storyRes = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        {
          role: "user",
          content: `
          Create a short, fun story for kids using these words:
          ${words.join(", ")}

          Style: ${style}
          Level: ${level}
          `
        }
      ]
    });

    // 2. Quiz
    const quizRes = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [
        {
          role: "user",
          content: `
          Create 3 multiple choice questions using:
          ${words.join(", ")}

          Format JSON:
          [{question, options[], answer}]
          `
        }
      ]
    });

    res.json({
      story: storyRes.choices[0].message.content,
      quiz: quizRes.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on 3001"));