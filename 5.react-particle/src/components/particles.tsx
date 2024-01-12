"use client";

import Particles from "@tsparticles/react";
import { useMemo } from "react";
import React from 'react'

const particles = (props: {id: string;done: boolean;}) => {
    const options:any = useMemo(
        () => ({
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 40,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
            //   direction: MoveDirection.none,
              enable: true,
              outModes: {
                // default: OutMode.out,
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );
    
    
  return (
    <div><Particles id={props.id} options={options} /></div>
  )
}

export default particles