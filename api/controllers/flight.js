import Flight from "../models/Flight.js";

export const createFlight = async (req, res, next) => {
  const newFlight = new Flight(req.body);

  try {
    const savedFlight = await newFlight.save();

    res.status(200).json(savedFlight);
  } catch (error) {
    next(error);
  }
};

export const updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedFlight);
  } catch (error) {
    next(error);
  }
};

export const deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);

    res.status(200).json("Flight has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);

    res.status(200).json(flight);
  } catch (error) {
    next(error);
  }
};

export const getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();

    res.status(200).json(flights);
  } catch (error) {
    next(error);
  }
};
