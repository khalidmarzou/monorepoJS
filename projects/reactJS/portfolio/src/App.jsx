import React from "react";
import ParticlesComponent from "./components/particlesComponent";
import Menu from "./components/navbar/Menu";
import Profile from "./components/profile/Profile";
import Container from "./components/content/Container";

function App() {
  return (
    <div className="md:h-2/3 md:w-[90%] xl:w-2/3 w-full h-full flex flex-col md:flex-row items-center gap-2 md:gap-0">
      <ParticlesComponent id={"bg"} />
      <Menu />
      <Profile />
      <Container />
    </div>
  );
}

export default App;
