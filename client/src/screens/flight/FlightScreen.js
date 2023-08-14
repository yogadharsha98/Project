import React, { useState } from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/en"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FlightScreen = () => {
  const [price, setPrice] = useState(0);

  const history = useNavigate();

  const flightId = window.location.pathname.split("/").pop(); // Extract flight ID from the URL

  const { data, loading, error } = useFetch(
    `https://project-crud.onrender.com/api/flights/${flightId}` // Use the flight ID in the API endpoint
  );

  const [input, setInput] = useState({
    name: "",
    email: "",
    date: "",
    class: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "date") {
      // Convert the selected date to MM/DD/YYYY format
      const dateObject = new Date(value);
      const month = dateObject.getMonth() + 1;
      const day = dateObject.getDate();
      const year = dateObject.getFullYear();
      value = `${month}/${day}/${year}`;
    }

    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const handleClassChange = (e) => {
    const selectedClass = e.target.value;
    setInput((prevState) => ({
      ...prevState,
      class: selectedClass,
    }));
    let price = 0;
    if (selectedClass === "Business") {
      price = 30000;
    } else if (selectedClass === "Economy") {
      price = 22000;
    }
    setPrice(price);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:8800/api/flightBooking", {
        flightId: data._id,
        flightName: data.name,
        to: data.to,
        from: data.from,
        name: String(input.name),
        email: String(input.email),
        date: Date(input.date),
        class: String(input.class),
        price: price,
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>
      history(
        `/thankyou?flightId=${data._id}&name=${input.name}&price=${price}`
      )
    );
  };

  return (
    <div>
      <NavBar />
      <Header type="list" />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>{/* Display flight data or other content here */}</div>
      )}
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={700}
          alignContent="center"
          alignSelf="center"
          marginLeft="auto"
          marginRight="auto"
          marginTop={8}
        >
          <FormLabel>Flight ID</FormLabel>
          <TextField
            name="_id"
            value={data._id}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            disabled
          />
          <FormLabel>Flight Name</FormLabel>
          <TextField
            name="fname"
            value={data.name}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            disabled
          />
          <FormLabel>To</FormLabel>
          <TextField
            name="to"
            onChange={handleChange}
            id="outlined-basic"
            value={data.to}
            variant="outlined"
            disabled
          />
          <FormLabel>From</FormLabel>
          <TextField
            name="from"
            onChange={handleChange}
            id="outlined-basic"
            value={data.from}
            variant="outlined"
            disabled
          />

          <FormLabel>Name</FormLabel>
          <TextField
            name="name"
            value={input.name}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />
          <FormLabel>Email</FormLabel>
          <TextField
            name="email"
            value={input.email}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />
          <FormLabel>Date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
            <DatePicker
              name="date"
              value={input.date || null}
              onChange={(date) =>
                handleChange({ target: { name: "date", value: date } })
              }
              required
            />
          </LocalizationProvider>

          <FormLabel>Class</FormLabel>
          <Select
            name="class"
            value={input.class}
            onChange={handleClassChange}
            required
          >
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Economy">Economy</MenuItem>
          </Select>
          <p>Price: {price} LKR</p>
          <Button type="submit">Confirm</Button>
        </Box>
      </form>
    </div>
  );
};

export default FlightScreen;
