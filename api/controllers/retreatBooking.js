import RetreatBooking from "../models/RetreatBooking.js";

export const createRetreatBooking = async (req, res, next) => {
  const newRetreatBooking = new RetreatBooking(req.body);

  try {
    const savedRetreatBooking = await newRetreatBooking.save();

    res.status(200).json(savedRetreatBooking);
  } catch (error) {
    next(error);
  }
};

export const updateRetreatBooking = async (req, res, next) => {
    try {
      const updatedRetreatBooking = await RetreatBooking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json(updatedRetreatBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteRetreatBooking = async (req, res, next) => {
    try {
      await RetreatBooking.findByIdAndDelete(req.params.id);
  
      res.status(200).json("Retreat Booking has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
  export const getRetreatBooking = async (req, res, next) => {
    try {
      const retreatBooking = await RetreatBooking.findById(req.params.id);
  
      res.status(200).json(retreatBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const getRetreatsBooking = async (req, res, next) => {
    try {
      const retreatsBooking = await RetreatBooking.find();
  
      res.status(200).json(retreatsBooking);
    } catch (error) {
      next(error);
    }
  };

  