import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import useFetch from "../../hooks/useFetch";
import SearchEventItem from "../../components/searchItem/SearchEventItem";

const EventScreen = () => {
  const { data, loading } = useFetch(`http://localhost:8800/api/event`);

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
                {data.map((item) => (
                  <SearchEventItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScreen;
