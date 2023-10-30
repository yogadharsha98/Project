import React from "react";
import "./SearchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="item1" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        
        <span className="siSubtitle">
          To: {item.to}
        </span>
        <span className="siSubtitle">
          From: {item.from}
        </span>
        
        <span className="siTimeOp">Arrival Time: {item.arrivaltime}</span>
        <span className="siTimeOp">Departure Time: {item.departuretime}</span>
        <span className="siTimeOp">Reach: {item.reachtime}</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this greate price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice}LKR</span>

          <Link to={`/flights/${item._id}`}>
            <button className="siCheckButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
