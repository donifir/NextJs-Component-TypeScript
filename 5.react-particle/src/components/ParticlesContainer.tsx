"use client";

import Particles from "./particles";
import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";


export default function ParticlesContainer() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    
    return (
        <main >
            <Particles 
                id="tsparticles"
                done={init}
            />
        </main>
    );
}