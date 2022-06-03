import React from "react";
import NoticeCard from "./NoticeCard";
import "./Notice.css";
const Notice = () => {
  return (
    <div className="notice">
      <div className="flex">
        <NoticeCard />
        <NoticeCard />
      </div>
      <p className="text-center py-2 font-medium text-pink-400">See All Notices</p>
    </div>
  );
};

export default Notice;
