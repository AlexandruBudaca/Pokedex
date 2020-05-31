import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [totalCaught, setTotalCaught] = useState(0);

  const incrementTotal = () => {
    setTotalCaught(totalCaught + 1);
  };

  return (
    <>
      <p>
        Caught {totalCaught} Pokemon on {props.myDate}
      </p>
      <button onClick={incrementTotal}>Increment</button>
    </>
  );
};

export default CaughtPokemon;
