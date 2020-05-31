import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const logWhenClicked = () => {
  alert("Hello");
};

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName="Pokedex" clickAction={logWhenClicked} />
      <BestPokemon pokemonAbility={abilities} />
      <CaughtPokemon myDate={date} />
    </div>
  );
}
export default App;
