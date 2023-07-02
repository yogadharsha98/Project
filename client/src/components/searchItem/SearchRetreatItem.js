import React from "react";
import "./SearchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="item1" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        
        <span className="siSubtitle">
          Location: {item.location}
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this greate price today!
        </span>
      </div>
      <div className="siDetails">

        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice}LKR</span>

          <Link to={`/retreat/${item._id}`}>
            <button className="siCheckButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
