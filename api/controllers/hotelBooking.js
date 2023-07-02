import HotelBooking from "../models/HotelBooking.js";

export const createHotelBooking = async (req, res, next) => {
  const newHotelBooking = new HotelBooking(req.body);

  try {
    const savedHotelBooking = await newHotelBooking.save();

    res.status(200).json(savedHotelBooking);
  } catch (error) {
    next(error);
  }
};

export const updateHotelBooking = async (req, res, next) => {
    try {
      const updatedHotelBooking = await HotelBooking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json(updatedHotelBooking);
    } catch (error) {
      next(error);
    }
  };
  
export const deleteHotelBooking = async (req, res, next) => {
    try {
      await HotelBooking.findByIdAndDelete(req.params.id);
  
      res.status(200).json("Hotel Booking has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
export const getHotelBooking = async (req, res, next) => {
    try {
      const hotelBooking = await HotelBooking.findById(req.params.id);
  
      res.status(200).json(hotelBooking);
    } catch (error) {
      next(error);
    }
  };
  
export const getHotelsBooking = async (req, res, next) => {
    try {
      const hotelsBooking = await HotelBooking.find();
  
      res.status(200).json(hotelsBooking);
    } catch (error) {
      next(error);
    }
};

  