import React from "react";

export default function Progress({ name, value }) {
  return (
    <>
      <div className="bar__metadata">
        <span>{name}</span>
        <span>{value}%</span>
      </div>
      <div clasNames="bar__bg">
        <div className="bar__value" style={{ width: `${value}%` }}></div>
      </div>
    </>
  );
}
