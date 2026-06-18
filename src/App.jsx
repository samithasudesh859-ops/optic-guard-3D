import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFBX, Stage, OrbitControls, Html, Float } from '@react-three/drei';

function Model() {
  const fbx = useFBX('/uploads_files_2462480_Sci+Fi+Camara+Fbx.fbx');
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive object={fbx} scale={0.008} />
    </Float>
  );
}

export default function App() {
  // App.jsx හි return සහ style කොටස පමණක් වෙනස් කරන්න
return (
  <div className="main-wrapper">
    {/* UI එක වෙනම layer එකක් විදියට */}
    <div className="ui-overlay">
      <h1>Camera X1</h1>
      <p>Pro-Level Surveillance Tech</p>
    </div>

    {/* 3D Canvas එක වෙනම layer එකක් විදියට */}
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <Stage intensity={0.6} environment="studio">
          <Model />
        </Stage>
        <OrbitControls enableZoom={true} enablePan={false} />
        
        <Html position={[2, 1, 0]} center>
          <div className="annotation">Lens Module</div>
        </Html>
        <Html position={[2, -1, 0]} center>
          <div className="annotation">Power Core</div>
        </Html>
      </Canvas>
    </div>

<style jsx global>{`
      html, body { margin: 0; padding: 0; overflow: hidden; background: #000; }
      .main-wrapper { 
        position: fixed; /* 'relative' වෙනුවට 'fixed' භාවිතා කරන්න */
        top: 0;
        left: 0;
        width: 100vw; 
        height: 100vh; 
        background: #000;
      }
      .ui-overlay { 
        position: absolute; top: 50px; left: 50px; color: white; z-index: 10; font-family: sans-serif; 
      }
      .canvas-container { 
        width: 100vw; 
        height: 100vh; 
        position: absolute; 
        top: 0; 
        left: 0; 
      }
      
      .annotation { 
        background: transparent !important; 
        backdrop-filter: none !important;
        border: none !important;
        color: #bf00ff;
        text-shadow: 0 0 8px #bf00ff, 0 0 12px #bf00ff;
        font-weight: bold;
        font-family: sans-serif;
        cursor: pointer;
        white-space: nowrap;
      }
    `}</style>
  </div>
);
}