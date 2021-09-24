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
    query: "",
    favorites: []
  });

  const onTextChange = input => {
    setState({ ...state, isSearching : input.length > 0, query: input });
    console.log(input);
  }
  const handleClick = link => {
    setState({...state, active : link})
  }
  const toggleFavorite = () => {
    if (state.active === 'search') {
      setState({...state, favorites: state.favorites.concat({})})
    } else {
      setState({...state, favorites: [state.favorites.pop()] })
    }
  }
  return (
    <div className="App" id="search-container">
      <Header />
      <Links {...state} handleClick={handleClick}/>
      <main>
        <SearchForm onTextChange={onTextChange}/>
        <Results {...state} toggleFavorite={toggleFavorite}/>
      </main>
    </div>
  );
};
export default App;
