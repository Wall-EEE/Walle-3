
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.connectDB;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/chats", chatRoutes);
app.use("/dalles", dalleRoutes);
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});