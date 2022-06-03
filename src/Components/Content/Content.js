import React from "react";
import Navbar from "./Navbar/Navbar";
import Notices from "./Notices/Notices";
import Calendar from "./Calendar/Calendar";
const Content = () => {
  return (
    <div style={{ backgroundColor: "#f2f3f7" }}>
      <Navbar />
      <div className="flex max-h-72 justify-evenly mt-7">
        <Notices />
        <div className="p-2 bg-white shadow-md rounded overflow-y-auto">
          <p className="font-medium">Calendar</p>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Content;
