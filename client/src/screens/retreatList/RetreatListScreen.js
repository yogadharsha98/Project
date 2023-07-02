import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./RetreatListScreen.css";
import useFetch from "../../hooks/useFetch";
import SearchRetreatItem from "../../components/searchItem/SearchRetreatItem";


const RetreatListScreen = () => {
 
  const { data, loading} = useFetch(
    `http://localhost:8800/api/retreat`
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
                
                <SearchRetreatItem item={item} key={item._id} />
                
              ))}
                
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatListScreen;
