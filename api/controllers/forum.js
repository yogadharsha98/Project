import Forum from "../models/Forum.js";

export const createForum = async (req, res, next) => {
  const newForum = new Forum(req.body);

  try {
    const savedForum = await newForum.save();

    res.status(200).json(savedForum);
  } catch (error) {
    next(error);
  }
};

export const updateForum = async (req, res, next) => {
  try {
    const updatedForum = await Forum.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedForum);
  } catch (error) {
    next(error);
  }
};

export const deleteForum = async (req, res, next) => {
  try {
    await Forum.findByIdAndDelete(req.params.id);

    res.status(200).json("Forum has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getForum = async (req, res, next) => {
  try {
    const forum = await Forum.findById(req.params.id);

    res.status(200).json(forum);
  } catch (error) {
    next(error);
  }
};

export const getForums = async (req, res, next) => {
  try {
    const forums = await Forum.find();

    res.status(200).json(forums);
  } catch (error) {
    next(error);
  }
};
