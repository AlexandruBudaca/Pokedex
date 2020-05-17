import React from "react";

const Logo = () => {
  const appName = "Pokedex";

  return (
    <div>
      <header>
        <h1>Welcome to the {appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt=""
        />
      </header>
    </div>
  );
};
export default Logo;
