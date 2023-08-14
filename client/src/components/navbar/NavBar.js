import { useContext } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Tab } from "@mui/material";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="navbar">
      </div>
      <div className="headerList">
        <div className="headerListItem">
          <Tab LinkComponent={NavLink} to="/" label="Stays" />
          <Tab LinkComponent={NavLink} to="/flights" label="Flight" />
          <Tab
            LinkComponent={NavLink}
            to="/retreat"
            label="Wellness Retreats"
          />
          <Tab LinkComponent={NavLink} to="/event" label="Events" />
          <Tab LinkComponent={NavLink} to="/forum" label="Forum" />
          
        </div>
        {user ? (
            <div>
              <PersonOutlineIcon />
              {user.username}
              <Tab LinkComponent={NavLink} to="/login" label="Logout" />
            </div>
          ) : (
            <div className="navItems">
            <Tab LinkComponent={NavLink} to="/register" label="Register" />
            <Tab LinkComponent={NavLink} to="/login" label="Login" />
            </div>
          )}
      </div>
    </div>
  );
};

export default NavBar;
