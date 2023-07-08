import React, {  useState } from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import {
  Box,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import useFetch from "../../hooks/useFetch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const RetreatScreen = () => {

  const history = useNavigate();

  const retreatId = window.location.pathname.split("/").pop(); // Extract flight ID from the URL

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/retreat/${retreatId}` // Use the flight ID in the API endpoint
  );

  const [input, setInput] = useState({
    name: "",
    email: "",
    date: ""
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


  const sendRequest = async () => {
    await axios
      .post("http://localhost:8800/api/retreatBooking", {
        retreatId: data._id,
        retreatTitle: data.title,
        location: data.location,
        price: data.cheapestPrice,
        name: String(input.name),
        email: String(input.email),
        date: Date(input.date),
        
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>
      history(
        `/thankyou?name=${input.name}`
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
          <FormLabel>Retreat ID</FormLabel>
          <TextField
            name="_id"
            value={data._id}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            disabled
          />
          <FormLabel>Title</FormLabel>
          <TextField
            name="fname"
            value={data.title}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            disabled
          />
          <FormLabel>Location</FormLabel>
          <TextField
            name="to"
            onChange={handleChange}
            id="outlined-basic"
            value={data.location}
            variant="outlined"
            disabled
          />
          <FormLabel>Price</FormLabel>
          <TextField
            name="from"
            onChange={handleChange}
            id="outlined-basic"
            value={data.cheapestPrice}
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

          <Button type="submit">Confirm</Button>
        </Box>
      </form>
    </div>
  );
};

export default RetreatScreen;
