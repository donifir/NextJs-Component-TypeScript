"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import fontJson from "./assets/helvetiker_bold.typeface.json"; // Pastikan Anda memiliki file JSON font yang di-load

const color = "#ff00ff";

const TextShape = () => {
  const ref = useRef<any>(null);
  const font = new FontLoader().parse(fontJson);

  // Buat instance dari TextGeometry dengan detail tambahan
  const textOptions = {
    font,
    size: 1,
    height: 0.2,
    curveSegments: 12, // Menambah segmentasi lengkung untuk detail yang lebih halus
  };
  const textGeometry = new TextGeometry("nikitech", textOptions);

  // Pastikan teks tetap di posisi tetap tanpa rotasi
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(0, 0, 0); // Set rotasi teks ke 0
      ref.current.position.set(0, 0, 0); // Set posisi teks ke 0
    }
  }, []);

  return (
    <mesh ref={ref} geometry={textGeometry} position={[0, 0, 0]}>
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.2} />
    </mesh>
  );
};

const AbstractStar = ({ p }: { p: number }) => {
  const ref = useRef<any>(null);

  // Set posisi objek tanpa animasi rotasi
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.position.set(0, 0, 0);
    }
  }, []);

  return (
    <mesh ref={ref}>
      <dodecahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial color={color} roughness={0.1} metalness={0.2} />
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

  // Gerakan dan rotasi kamera
  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0); // Kamera selalu mengarah ke pusat
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<AbstractStar p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <ambientLight intensity={0.5} /> {/* Menambahkan cahaya ambient */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Menambahkan cahaya titik */}
      <TextShape /> {/* Teks tetap diam di tengah */}
      {stars}
    </>
  );
}

const Page = () => {
  return (
    <div className="container h-[900px]">
      <Canvas gl={{ antialias: true }}> {/* Aktifkan antialiasing */}
        <Scene />
      </Canvas>
    </div>
  );
};

export default Page;
