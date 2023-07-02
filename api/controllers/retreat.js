import Retreat from "../models/Retreat.js";

export const createRetreat = async (req, res, next) => {
  const newRetreat = new Retreat(req.body);

  try {
    const savedRetreat= await newRetreat.save();

    res.status(200).json(savedRetreat);
  } catch (error) {
    next(error);
  }
};

export const updateRetreat = async (req, res, next) => {
  try {
    const updatedRetreat = await Retreat.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedRetreat);
  } catch (error) {
    next(error);
  }
};

export const deleteRetreat = async (req, res, next) => {
  try {
    await Retreat.findByIdAndDelete(req.params.id);

    res.status(200).json("Retreat has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getRetreat = async (req, res, next) => {
  try {
    const retreat = await Retreat.findById(req.params.id);

    res.status(200).json(retreat);
  } catch (error) {
    next(error);
  }
};

export const getRetreats = async (req, res, next) => {
  try {
    const retreats = await Retreat.find();

    res.status(200).json(retreats);
  } catch (error) {
    next(error);
  }
};
