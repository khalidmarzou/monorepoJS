import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "../../config/particlesConfig"; // Import your particles config

const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim engine for better performance
    }).then(() => {
      setInit(true); // Set state to true when particles engine is initialized
    });
  }, []);

  // Log the container when particles are loaded (you can use this for debugging or initialization)
  const particlesLoaded = (container) => {
    console.log("Particles loaded", container);
  };

  return (
    <>
      {/* Conditionally render particles only after the engine has initialized */}
      {init ? (
        <Particles id={id} init={particlesLoaded} options={particlesConfig} />
      ) : (
        <div>Loading particles...</div> // Show loading text while particles are loading
      )}
    </>
  );
};

export default ParticlesComponent;
