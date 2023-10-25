import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ setOpen, hotelId, dates: reservationDates, price }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data } = useFetch(`/api/hotels/room/${hotelId}`);

  const { user } = useContext(AuthContext);

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      // First, update room availability
      await Promise.all(
        selectedRooms.map(async (roomId) => {
          // Update room availability by sending a PUT request
          const res = await axios.put(`/api/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
  
      // After updating room availability, make a POST request for hotel booking
      const hotelBookingData = {
        hotelId: hotelId,
        roomIds: selectedRooms,
        name: user.name, // Replace with the actual user's name
        email: user.email, // Replace with the actual user's email
        dates: alldates,
        price: price,
      };
  
      // Send the POST request to store hotel booking data
      await axios.post('/api/hotelbooking', hotelBookingData);
  
      // After successful booking, navigate to the thank you page
      setOpen(false);
      navigate('/thankyou');
    } catch (error) {
      // Handle any errors here
      console.error('Error handling hotel booking:', error);
    }
  };
  
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {reservationDates && reservationDates.length > 0 ? (
          // Display the dates here
          reservationDates.map((date, index) => (
            <div key={index}>
              {date.startDate.toLocaleDateString()} to{" "}
              {date.endDate.toLocaleDateString()}
            </div>
          ))
        ) : (
          // Handle the case when reservationDates is undefined or empty
          <div>No reservation dates available.</div>
        )}

        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>

              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};
export default Reserve; 