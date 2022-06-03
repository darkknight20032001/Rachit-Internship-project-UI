import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import FeedIcon from "@mui/icons-material/Feed";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import "./Drawer.css";
const Drawer = ({ minimized, setMinimized }) => {
  return (
    <div className="drawer shadow-md">
      <div className="drawer-logo">
        <img src="images/logo.png" alt="Oxford public school" />
        <p className="font-medium">Oxford Public School</p>
      </div>
      <div className="drawer-navigation">
        <a href="#">
          <AssignmentTurnedInIcon />
          <span>Attendance</span>
        </a>
        <a href="#">
          <InsertInvitationIcon />
          <span>Calender</span>
        </a>
        <a href="#">
          <FeedIcon />
          <span>Notice Board</span>
        </a>
        <a href="#">
          <AccountBoxIcon />
          <span>Class Teacher</span>
        </a>
        <a href="#">
          <ReportProblemIcon />
          <span>Grievances</span>
        </a>
      </div>
      <div
        className="drawer-minimize"
        onClick={() => {
          setMinimized(!minimized);
        }}
      >
        {minimized ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        <span>Minimize</span>
      </div>
    </div>
  );
};

export default Drawer;
