import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
        <Link to="/users" style={{ textDecoration: "none" }}>
          <Widget type="user" />
        </Link>
        <Link to="/hotels" style={{ textDecoration: "none" }}>
          <Widget type="hotels" />
        </Link>
        <Link to="/rooms" style={{ textDecoration: "none" }}>
         <Widget type="rooms" />
        </Link>
        <Link to="/flights" style={{ textDecoration: "none" }}>
         <Widget type="flights" />
        </Link>
        <Link to="/flightBooking" style={{ textDecoration: "none" }}>
         <Widget type="flightbookings" />
        </Link>
          
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Number of bookings" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
