import React, { useState } from "react";
import { Links, Results, SearchForm, Header, Modal } from "./components";


/* isSearching =  l'utilisateur est t'il en train de saisir une recherche?
   movies = résultat de la recherche utilisateur
   query = corresponds au résultat de la requete utilisateur, permet d'envoyer une info lors de la requete API*/
const App = () => {
  const [state, setState] = useState({
    isSearching: false,
    active: "search",
    movies: [{}, {}],
    query: ""
  });

  const onTextChange = input => {
    setState({ ...state, isSearching : input.length > 0})
    console.log(input);
  }

  return (
    <div className="App" id="search-container">
      <Header />
      <Links />
      <main>
        <SearchForm onTextChange={onTextChange}/>
        <Results {...state}/>
      </main>
    </div>
  );
};
export default App;
