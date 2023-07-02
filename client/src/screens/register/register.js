import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Box, FormLabel, TextField } from "@mui/material";

const Register = () => {
  const history = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
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
      .post("/auth/register", {
        username: String(input.username),
        email: String(input.email),
        country: String(input.country),
        city: String(input.city),
        phone: String(input.phone),
        password: String(input.password)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() =>
      history(
        '/login'
      )
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={300}
          alignContent="center"
          alignSelf="center"
          marginLeft="auto"
          marginRight="auto"
          marginTop={8}
        >
         
          <FormLabel>User Name</FormLabel>
          <TextField
            name="username"
            value={input.username}
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
          <FormLabel>Country</FormLabel>
          <TextField
            name="country"
            value={input.country}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />
          <FormLabel>City</FormLabel>
          <TextField
            name="city"
            value={input.city}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />
          <FormLabel>Phone</FormLabel>
          <TextField
            name="phone"
            value={input.phone}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />
          <FormLabel>Password</FormLabel>
          <TextField
           type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            required
          />

          <Button type="submit">Sign up</Button>
        </Box>
      </form>
    </div>
  );
};

export default Register;
