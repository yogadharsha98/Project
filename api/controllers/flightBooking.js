import FlightBooking from "../models/FlightBooking.js";

export const createFlightBooking = async (req, res, next) => {
  const newFlightBooking = new FlightBooking(req.body);

  try {
    const savedFlightBooking = await newFlightBooking.save();

    res.status(200).json(savedFlightBooking);
  } catch (error) {
    next(error);
  }
};

export const updateFlightBooking = async (req, res, next) => {
    try {
      const updatedFlightBooking = await FlightBooking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      res.status(200).json(updatedFlightBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteFlightBooking = async (req, res, next) => {
    try {
      await FlightBooking.findByIdAndDelete(req.params.id);
  
      res.status(200).json("Flight Booking has been deleted");
    } catch (error) {
      next(error);
    }
  };
  
  export const getFlightBooking = async (req, res, next) => {
    try {
      const flightBooking = await FlightBooking.findById(req.params.id);
  
      res.status(200).json(flightBooking);
    } catch (error) {
      next(error);
    }
  };
  
  export const getFlightsBooking = async (req, res, next) => {
    try {
      const flightsBooking = await FlightBooking.find();
  
      res.status(200).json(flightsBooking);
    } catch (error) {
      next(error);
    }
  };

  