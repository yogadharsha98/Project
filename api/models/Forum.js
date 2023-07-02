import mongoose from "mongoose";

const ForumSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Forum = mongoose.model("Forum", ForumSchema);

export default Forum;
