import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface IBoxComponent {
  texture: any,
}

const BoxComponent = ({ texture }: IBoxComponent) => {
  const mesh = useRef(null);
  // @ts-ignore
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.002));
  return (
    <mesh ref={mesh} position={[1.5, 0, 0]}>
      <boxBufferGeometry args={[3, 3, 3]} attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
}

export default BoxComponent;