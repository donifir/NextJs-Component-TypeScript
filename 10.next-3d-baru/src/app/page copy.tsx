// import "./styles.css";
"use client"

import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

import fontJson from "./assets/helvetiker_bold.typeface.json" // Pastikan Anda memiliki file JSON font yang di-load


extend({ TextGeometry });

const color = "#ff00ff";

const TextShape = () => {
  const ref = useRef<any>(null);
  const font = new FontLoader().parse(fontJson);

  // Buat instance dari TextGeometry
  const textOptions = {
    font,
    size: 1,
    height: 0.2,
  };
  const textGeometry = new TextGeometry("nikitech", textOptions);

  return (
    <mesh ref={ref} geometry={textGeometry} rotation-x={0.35}>
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const AbstractStar = ({ p }: { p: number }) => {
  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <dodecahedronGeometry args={[0.1, 0]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<AbstractStar p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <TextShape />
      {stars}
    </>
  );
}


const page = () => {
  return (
    <div className="container h-[900px]">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}


export default page