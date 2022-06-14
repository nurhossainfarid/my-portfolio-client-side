import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig from "./Particles-config";

function ParticlesBackground() {
    return (
        <Particles params={ParticlesConfig}></Particles>
    );
}

export default ParticlesBackground;