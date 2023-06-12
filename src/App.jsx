import { useState } from "react";
import PersonsList from "./data";
import List from "./List";

const App = () => {
  const [persons, setPersons] = useState(PersonsList);
  return (
    <main>
      <section className="container">
        <h3>
          {persons.length > 0
            ? `${persons.length} Birthday Today`
            : `No Birthday Today`}
        </h3>
        <List persons={persons} />
        <button className="btn btn-block" onClick={() => setPersons([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
