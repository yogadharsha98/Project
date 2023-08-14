import EventBooking from "../models/EventBooking.js";

export const createEventBooking = async (req, res, next) => {
  const newEventBooking = new EventBooking(req.body);

  try {
    const savedEventBooking = await newEventBooking.save();

    res.status(200).json(savedEventBooking);
  } catch (error) {
    next(error);
  }
};

export const updateEventBooking = async (req, res, next) => {
    try {
      const updatedEventBooking = await EventBooking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json(updatedEventBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteEventBooking = async (req, res, next) => {
    try {
      await EventBooking.findByIdAndDelete(req.params.id);
  
      res.status(200).json("Event Booking has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
  export const getEventBooking = async (req, res, next) => {
    try {
      const eventBooking = await EventBooking.findById(req.params.id);
  
      res.status(200).json(eventBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const getEventsBooking = async (req, res, next) => {
    try {
      const eventsBooking = await EventBooking.find();
  
      res.status(200).json(eventsBooking);
    } catch (error) {
      next(error);
    }
  };

  