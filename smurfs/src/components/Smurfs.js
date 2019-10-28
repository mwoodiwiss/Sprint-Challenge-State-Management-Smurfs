import React, { useContext } from "react";
import { SmurfContext } from "./Contexts/SmurfContext";
import Smurf from "./Smurf";

const Smurfs = () => {

  const smurfs = useContext(SmurfContext);

  return (
    <div className="smurfs-container">
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

export default Smurfs;