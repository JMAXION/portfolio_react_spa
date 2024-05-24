import React from "react";

export default function Project({ image, meta, number, desc }) {
  return (
    <div className="project">
      <img className="project__img" src={image} alt={meta} />
      <div className="project__description">
        <h3 className="project__description__title">{number}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
