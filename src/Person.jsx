import React from "react";
export function Person({ id, image, name, age }) {
  return (
    <li key={id}>
      <article className="person">
        <img src={image} alt="image" className="img" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </li>
  );
}
