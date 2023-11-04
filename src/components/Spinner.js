import React from "react";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
