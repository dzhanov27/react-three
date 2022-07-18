import React, { useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from "@react-three/fiber";
import { Stars } from '@react-three/drei';

import UploadAndDisplayImage from "./components/UploadImageComponent/UploadImageComponent";
import BoxComponent from './components/BoxComponent/BoxComponent'

// @ts-ignore
import img from './img/logo.png'
import './index.css'

const App = () => {
  const [selectedImage, setSelectedImage] = useState(img);
  const texture = useLoader(THREE.TextureLoader, selectedImage)

  return (
    <div className="App">
      <UploadAndDisplayImage setSelectedImage={setSelectedImage} />
      <div className="canvasContainer">
        <Canvas flat linear>
          <Stars />
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 15, 20]} angle={0.3} />
          <BoxComponent texture={texture} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
