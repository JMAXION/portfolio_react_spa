import React from "react";

export default function Button({ className, category }) {
  return (
    <button className="category">
      {className}
      <span className="category__count">{category}</span>
    </button>
  );
}
