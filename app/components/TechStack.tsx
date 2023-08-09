import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { techStackPaths } from '../constants/pathConstants'


function Box(props: any | null) {

    // This reference will give us direct access to the mesh
    const meshRef: any = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const loader = new TextureLoader()
    const image = loader.load(`${techStackPaths[props.index]}`)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) =>{ 
      if(hovered){
       (meshRef.current.rotation.y += delta* 4) 
      } else {
        meshRef.current.rotation.y = 4.6
      }
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        rotation={[0, 4.6, 0]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <sphereGeometry args={[2]}/>
        <meshStandardMaterial map={image} opacity={1} transparent={true}  />
      </mesh>
    )
 }

  function CanvasRender(props: any) {
    return(
        <Canvas>          
          <ambientLight />
          <Box position={[0, 0, 0]} index={props.index}/>
        </Canvas>
      )
  }
  

export default CanvasRender