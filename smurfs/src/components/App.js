import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { SmurfContext } from './Contexts/SmurfContext';
import Smurfs from "./Smurfs";
import SmurfFormik from "./Form/Form";
import Navigation from './Navigation';
import "./App.css";


export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {

    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response.data);
        setSmurfs(response.data);        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <SmurfContext.Provider value={ smurfs }>
          <Navigation component={Navigation} />

          {/* Routes */}
          <Route
            exact
            path="/"
            render={() => <Smurfs component={Smurfs} />}
          />

          <Route
            path="/form"
            render={() => <SmurfFormik component={SmurfFormik} />}
          />
      </SmurfContext.Provider>
    </div>
  );
}
