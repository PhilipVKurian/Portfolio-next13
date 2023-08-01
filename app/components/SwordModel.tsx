'use client'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF } from '@react-three/drei'

const ModelCanvas = () => {
    return(
        <Canvas
            dpr={[1,2]}            
            frameloop='demand'
            camera={{position: [0,0,20], fov:20}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense >
                <OrbitControls
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={5}
                />
                <SwordModel/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

const SwordModel = () => {

    const sword = useGLTF('./sword.gltf')

    return(
        <mesh>
            <hemisphereLight intensity={3} position={[0, 3, 0]} groundColor={"black"}/>
            <ambientLight intensity={2}/>
            <pointLight intensity={3} power={300} position={[0,0,4]}/>
            <pointLight intensity={3} power={300} position={[0,-3,4]}/>
            <pointLight intensity={3} power={300} position={[2,2,-4]}/>
            <primitive 
                object={sword.scene}
                scale={0.5}
                position={[0, 0, 0]}                
            />
        </mesh>
    )

}

export default ModelCanvas;

