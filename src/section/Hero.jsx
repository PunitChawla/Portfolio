import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import { CanvasLoader } from "../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constant"
import { Target } from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/cube"
import Rings from "../components/Rings"
import { HeroCamera } from "../components/HeroCamra"
import { Button } from "../components/Button"
import React from 'react'
import { HackerRoom } from "../components/Hackerroom"
function Model({ url }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
  }
export const Hero  =()=>{

    // const x = useControls('HackerRoom',{
    //     positionX:{
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     positionY:{
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     positionZ:{
    //         value : 2.5,
    //         min : -10,
    //         max : 10
    //     },
    //     rotationX:{
    //         value :0,
    //         min : -10,
    //         max : 10
    //     },
    //     rotationY:{
    //         value :0,
    //         min : -10,
    //         max : 10
    //     },
    //     rotationZ:{
    //         value :0,
    //         min : -10,
    //         max : 10
    //     },
    //     scale:{
    //         value : 1,
    //         min : 0.1,
    //         max : 10
    //     }
    // })

    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({ minWidth: 768 , maxWidth:440});

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    return(
        <section className=" min-h-screen  w-full h-hull flex flex-col relative" id="home">

            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, i am Punit 
                    <span className="waving-hand">👋</span>
                </p>
                <p className="text-gray_gradient hero_tag">Code. Create. Innovate</p>
            </div>


            <div className="w-full  h-full absolute inset-0 ">
                    {/* <Leva/> */}
                <Canvas className="w-full h-full " >
                    <ambientLight intensity={0.5} />
                   <PerspectiveCamera makeDefault position={[0,0,20]}/>
                    <Suspense fallback={<CanvasLoader/>}>

                    <HeroCamera isMobile={isMobile}>
                    <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} />
                    </HeroCamera>

                    {/* <OrbitControls /> */}
                    <group>
                        <Target position = {sizes.targetPosition}/>
                        <ReactLogo position = {sizes.reactLogoPosition}/>
                        <Cube position= {sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>            
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                <Button name = "Let's work together" isBeam  containerClass = "sm:w-fit w-full sm:min-w-96" ></Button>
                </a>
            </div>
        </section>
    )
}