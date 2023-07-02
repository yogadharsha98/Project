import Comment from "../models/Comment.js";

export const createComment = async (req, res, next) => {
  const newComment = new Comment(req.body);

  try {
    const savedComment = await newComment.save();

    res.status(200).json(savedComment);
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (req, res, next) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json("Comment has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);

    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
