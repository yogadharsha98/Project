import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./FlightListScreen.css";
import useFetch from "../../hooks/useFetch";
import SearchItem from "../../components/searchItem/SearchFlightItem";

const FlightListScreen = () => {
 
  const { data, loading } = useFetch(
    `http://localhost:8800/api/flights`
  );
  
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
          
            {loading ? (
              "Loading"
            ) : (
              <>
              {data.map((item)=>(
                
                <SearchItem item={item} key={item._id} />
                
              ))}
                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightListScreen;
