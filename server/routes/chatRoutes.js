import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const router = express.Router();
import Chat from '../mongodb/models/chat.js';

router.get("/:id", async (req, res) => {
  const chat = await Chat.findById(req.params.id);
  res.send(chat);
});

router.post("/", async (req, res) => {
  const { message, sender } = req.body;
  const chat = new Chat({
    messages: [{ text: message, sender }],
  });
  await chat.save();
  res.send(chat);
});

export default router;