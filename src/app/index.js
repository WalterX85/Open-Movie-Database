import React, { useState } from "react";
import { Links, Results, SearchForm, Header, Modal } from "./components";

const App = () => {
  const [state, setState] = useState({
    isSearching: false,
    active: "search",
    movies: [{}, {}],
    query: ""
  });
  return (
    <div className="App" id="search-container">
      <Header />
      <Links />
      <main>
        <SearchForm />
        <Results />
      </main>
    </div>
  );
};
export default App;
