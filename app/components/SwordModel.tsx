import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Gltf, OrbitControls, Preload, useGLTF } from '@react-three/drei';


interface TweakProps {
  displacementScaleVal: number;
}

function Tweak() {
  const plane = useGLTF('./plane.gltf')
  const meshRef = useRef()  
  const oscillationFrequency = 2 // Adjust the frequency of the oscillation
  const maxDisplacement = 40 // adjust the maximum displacement value
  const smoothingFactor = 0.00005 // Adjust the smoothing factor
  const [targetDisplacementScale, setTargetDisplacementScale] = useState(-3);
  const [currentDisplacementScale, setCurrentDisplacementScale] = useState(0);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * oscillationFrequency;
      const newDisplacementScale = Math.sin(t) * maxDisplacement;

      // Smoothly transition between current and new displacement scale
      const smoothedDisplacementScale = currentDisplacementScale + (newDisplacementScale - currentDisplacementScale) * smoothingFactor;

      setCurrentDisplacementScale(smoothedDisplacementScale);
      setTargetDisplacementScale(smoothedDisplacementScale);
      
    }
  });

  return (
    <mesh 
      rotation-x={1} 
      rotation-y={1.577} 
      rotation-z={39.90} 
      position={[-0.30, -0.66, targetDisplacementScale -4 ]} 
    >
      <primitive ref={meshRef}
        object={plane.scene} 
        scale={15} />

    </mesh>
  );
}

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 0], fov: 100 }}
      gl={{ preserveDrawingBuffer: true, logarithmicDepthBuffer: true }}
    >
      <pointLight intensity={2} position={[0,0, -3]}/>
      <Suspense fallback={null}>
      </Suspense>
      <Preload all />
      <Tweak />
    </Canvas>
  )
}


export default ModelCanvas;

//Paste this function into Tweak() to adjust 3d object with GUI
  // var { rotateX, rotateY, rotateZ, color, positionX, positionY, scaleX, scaleY, scaleZ } = useControls('PlaneGeometry', {
  //   transform: folder({
  //     rotateX: 1,
  //     rotateY: 1.58,
  //     rotateZ:39.96,
  //   }),
  //   material: folder({
  //     color: '#333',
  //     wireframe: true,
  //   }),
  //   position: folder({
  //     positionX: -0.30,
  //     positionY: -0.66,
  //   }),
  //   scale: folder({
  //     scaleX: 3,
  //     scaleY: 3,
  //     scaleZ: 0.01,
  //   }),
  // });
