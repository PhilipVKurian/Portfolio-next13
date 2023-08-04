import { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useControls, folder } from 'leva';

interface TweakProps {
  displacementScaleVal: number;
}

function Tweak() {
  const loader = new TextureLoader();
  const texture = loader.load('./grid.png');
  const clouds = loader.load('./clouds.png');

  // const { rotateX, rotateY, rotateZ, color, positionX, positionY, positionZ, scaleX, scaleY, scaleZ } = useControls('PlaneGeometry', {
  //   transform: folder({
  //     rotateX: 0.0,
  //     rotateY: -0.01,
  //     rotateZ: 3.145,
  //   }),
  //   material: folder({
  //     color: '#333',
  //     wireframe: true,
  //   }),
  //   position: folder({
  //     positionX: -0.30,
  //     positionY: -0.66,
  //     positionZ: -3,
  //   }),
  //   scale: folder({
  //     scaleX: 3,
  //     scaleY: 3,
  //     scaleZ: 0.01,
  //   }),
  // });

  const oscillationFrequency = 2 // Adjust the frequency of the oscillation
  const maxDisplacement = 40 // Adjust the maximum displacement value
  const smoothingFactor = 0.0002 // Adjust the smoothing factor

  const [targetDisplacementScale, setTargetDisplacementScale] = useState(0);
  const [currentDisplacementScale, setCurrentDisplacementScale] = useState(0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * oscillationFrequency;
    const newDisplacementScale = Math.sin(t) * maxDisplacement;

    // Smoothly transition between current and new displacement scale
    const smoothedDisplacementScale = currentDisplacementScale + (newDisplacementScale - currentDisplacementScale) * smoothingFactor;

    setCurrentDisplacementScale(smoothedDisplacementScale);
    setTargetDisplacementScale(smoothedDisplacementScale);
  });

  return (
    <mesh rotation-x={0} rotation-y={-0.01} rotation-z={3.145} position={[-0.30, -0.66, -3]}>
        {/* <mesh rotation-x={rotateX} rotation-y={rotateY} rotation-z={rotateZ} position={[positionX, positionY, positionZ]} >  */}
      <planeGeometry  args={[20, 20, 210, 210]} />

      <meshStandardMaterial map={clouds} color={'#333'} displacementMap={clouds} displacementScale={targetDisplacementScale}  />
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

    <hemisphereLight intensity={1.5} position={[4, 4, 1]} groundColor={'#404040'} /> Adjust intensity and groundColor
      <ambientLight intensity={2} /> {/* Adjust intensity */}
      {/* <pointLight intensity={2} power={700} position={[0, 0, 0]} /> */}
      <pointLight intensity={100} power={1000} position={[0, -3, 4]} />
      <pointLight intensity={100} power={1000} position={[2, 2, -4]} />
      <Suspense fallback={null}>
        {/* <OrbitControls enableZoom={false} />    */}
      </Suspense>
      <Preload all />
      <Tweak />
    </Canvas>
  )
}


export default ModelCanvas;