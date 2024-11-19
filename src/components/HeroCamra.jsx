import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react"

 export const HeroCamera =({children , isMobile})=>{

    const groupref = useRef();
   useFrame(( state , delta)=>{
        easing.damp3(state.camera.position, [0,0,20], 0.25,delta)
        if(!isMobile)
        {
            easing.dampE(groupref.current.rotation, [-state.pointer.y/3,state.pointer.x/5,0], 0.25,delta)
        }
    })
    return(
        <group ref={groupref} scale={isMobile ? 1.1 : 1.3}>
            {children}
        </group>
    )
}