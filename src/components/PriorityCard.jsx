import React from "react";

const PriorityCard = ({ title, date }) => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow">
      <div>{title}</div>
      <div>{date}</div>
      <div className="text-red-500">Tinggi</div>
    </div>
  );
};

export default PriorityCard;
