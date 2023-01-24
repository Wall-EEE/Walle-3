import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  messages: [
    {
      text: { type: String },
      sender: { type: String },
    },
  ],
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;