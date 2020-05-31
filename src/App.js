import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";

const logWhenClicked = () => {
  alert("Hello");
};

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div className="main-container">
      <div className="container">
        <Logo appName="Pokedex" clickAction={logWhenClicked} />
      </div>
      <div className="container">
        <BestPokemon pokemonAbility={abilities} />
        <CaughtPokemon myDate={date} />
      </div>
    </div>
  );
}
export default App;
