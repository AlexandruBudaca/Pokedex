import React, { useState, useEffect } from "react";

const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBestPokemon(data);
      });
  }, []);
  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
};

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is {props.pokemon.name}</p>
      <ul>
        {props.pokemon.abilities.map((ab, index) => {
          return <li key={index}>{ab.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemonFetcher;
