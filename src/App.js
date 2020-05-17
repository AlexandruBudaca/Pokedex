import React from "react";
import BestPokemon from "./BestPokemon";

function Logo() {
  return (
    <div>
      <header>
        <h1>Welcome to the Pokedex</h1>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
      </header>
    </div>
  );
}
function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}
export default App;
