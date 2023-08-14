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
import axios from "axios";
import { useNavigate} from "react-router-dom";

const EventBookingScreen = () => {

  const history = useNavigate();

  const eventId = window.location.pathname.split("/").pop(); 

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/event/${eventId}` 
  );

  const [input, setInput] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    let value = e.target.value;

    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };


  const sendRequest = async () => {
    await axios
      .post("http://localhost:8800/api/eventBooking", {
        eventId: data._id,
        eventTitle: data.title,
        location: data.location,
        date: data.date,
        price: data.cheapestPrice,
        name: String(input.name),
        email: String(input.email)
        
        
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
        <div></div>
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
          <FormLabel>Event ID</FormLabel>
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
          <FormLabel>Date</FormLabel>
          <TextField
            name="to"
            onChange={handleChange}
            id="outlined-basic"
            value={data.date}
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
          <Button type="submit">Confirm</Button>
        </Box>
      </form>
    </div>
  );
};

export default EventBookingScreen;
