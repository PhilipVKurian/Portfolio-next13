import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useControls, folder } from 'leva';

interface TweakProps {
  displacementScaleVal: number;
}

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      camera={{ position: [0, 0, 20], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <SwordModel />
        <GlowingOrbs />
      </Suspense>
      <Preload all />
      <Tweak displacementScaleVal={0} />
    </Canvas>
  );
};

const SwordModel = () => {
  return (
    <mesh>
      <hemisphereLight intensity={3} position={[0, 3, 0]} groundColor={'black'} />
      <ambientLight intensity={5} />
      <pointLight intensity={3} power={300} position={[0, 0, 4]} />
      <pointLight intensity={3} power={300} position={[0, -3, 4]} />
      <pointLight intensity={3} power={300} position={[2, 2, -4]} />
    </mesh>
  );
};

function Tweak({ displacementScaleVal }: TweakProps) {
  const loader = new TextureLoader();
  const texture = loader.load('./grid.png');
  const clouds = loader.load('./clouds.png');

  const { rotateX, rotateY, rotateZ, color, positionX, positionY, positionZ, scaleX, scaleY, scaleZ } = useControls('PlaneGeometry', {
    transform: folder({
      rotateX: 0.0,
      rotateY: -0.01,
      rotateZ: 3.145,
    }),
    material: folder({
      color: '#333',
      wireframe: false,
    }),
    position: folder({
      positionX: -0.30,
      positionY: -0.66,
      positionZ: 0,
    }),
    scale: folder({
      scaleX: 3,
      scaleY: 3,
      scaleZ: 0.01,
    }),
  });

  const oscillationFrequency = 2; // Adjust the frequency of the oscillation
  const maxDisplacement = 40; // Adjust the maximum displacement value
  const smoothingFactor = 0.05; // Adjust the smoothing factor

  const [targetDisplacementScale, setTargetDisplacementScale] = useState(displacementScaleVal);
  const [currentDisplacementScale, setCurrentDisplacementScale] = useState(displacementScaleVal);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * oscillationFrequency;
    const newDisplacementScale = Math.sin(t) * maxDisplacement;

    // Smoothly transition between current and new displacement scale
    const smoothedDisplacementScale = currentDisplacementScale + (newDisplacementScale - currentDisplacementScale) * smoothingFactor;

    setCurrentDisplacementScale(smoothedDisplacementScale);
    setTargetDisplacementScale(smoothedDisplacementScale);
  });

  return (
    <mesh rotation-x={rotateX} rotation-y={rotateY} rotation-z={rotateZ} position={[positionX, positionY, positionZ]} scale={[scaleX, scaleY, scaleZ]}>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial map={texture} color={color} displacementMap={clouds} displacementScale={targetDisplacementScale} transparent={true} depthTest={false} />
    </mesh>
  );
}

function GlowingOrbs() {
  // Create and position glowing orbs
  // Use useFrame to update their positions over time

  const orbs = []; // Store the orbs

  // Create orbs
  for (let i = 0; i < 5; i++) {
    orbs.push(
      <mesh key={i}>
        {/* Orb properties */}
      </mesh>
    );
  }

  useFrame(({ clock }) => {
    // Update orb positions based on time
    const time = clock.getElapsedTime();

    // Update orb positions here

  });

  return <>{orbs}</>;
}

export default ModelCanvas;