import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { Box} from "@mui/material";

const ThankScreen = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");


  return (
    <>
      <NavBar />
      <Header type="list" />
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
        <p>{name}, Thank your for your booking. Good Luck!</p>
        
        
      </Box>
    </>
  );
};


export default ThankScreen;