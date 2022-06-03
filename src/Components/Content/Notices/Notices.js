import React from "react";
import Notice from "./Notice";

const Notices = () => {
  return (
    <div className=" bg-white p-3 shadow-md rounded	" style={{ width: "40rem" }}>
      <p className="font-medium">Notices</p>
      <Notice />
    </div>
  );
};

export default Notices;
