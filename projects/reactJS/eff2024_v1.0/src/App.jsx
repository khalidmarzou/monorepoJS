import React from "react";
import Expert1 from "./components/Expert1";
import Formulaire from "./components/Formulaire";
import Expert2 from "./components/Expert2";

const App = () => {
  return (
    <>
      <Formulaire />
      <Expert1 />
      <hr className="my-20" />
      <Expert2 />
    </>
  );
};

export default App;
