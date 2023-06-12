import { Person } from "./Person";
import React from "react";

const List = ({ persons }) => {
  return (
    <section>
      <ul>
        {persons.map((person) => {
          const { id, name, age, image } = person;
          return <Person id={id} image={image} name={name} age={age} />;
        })}
      </ul>
    </section>
  );
};

export default List;
