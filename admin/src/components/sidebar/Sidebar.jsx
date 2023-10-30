import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import BedIcon from '@mui/icons-material/Bed';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EventIcon from '@mui/icons-material/Event';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
            <BedIcon className="icon" />
            <span>Rooms</span>
          </li>
          </Link>
          <Link to="/hotelBooking" style={{ textDecoration: "none" }}>
            <li>
            <StoreIcon className="icon" />
            <span>Hotel bookings</span>
          </li>
          </Link>
          <Link to="/flights" style={{ textDecoration: "none" }}>
            <li>
            <FlightTakeoffIcon className="icon" />
            <span>Flights</span>
          </li>
          </Link>

          <Link to="/flightBooking" style={{ textDecoration: "none" }}>
            <li>
            <AirplaneTicketIcon className="icon" />
            <span>Flight bookings</span>
          </li>
          </Link>
          <Link to="/retreat" style={{ textDecoration: "none" }}>
            <li>
            <SelfImprovementIcon className="icon" />
            <span>Retreat</span>
          </li>
          </Link>

          <Link to="/retreatBooking" style={{ textDecoration: "none" }}>
            <li>
            <SelfImprovementIcon className="icon" />
            <span>Retreat bookings</span>
          </li>
          </Link>
          <Link to="/event" style={{ textDecoration: "none" }}>
            <li>
            <EventIcon className="icon" />
            <span>Event</span>
          </li>
          </Link>

          <Link to="/eventBooking" style={{ textDecoration: "none" }}>
            <li>
            <EventIcon className="icon" />
            <span>Event bookings</span>
          </li>
          </Link>
          

          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
