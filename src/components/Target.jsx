import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import * as THREE from "three";

export const Target = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
            });
        }
    });

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            {/* Target stand base */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.4, 0.1, 32]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            
            {/* Target pole */}
            <mesh position={[0, 1, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
                <meshStandardMaterial color="#654321" />
            </mesh>
            
            {/* Target circles */}
            <group position={[0, 2, 0]}>
                {/* Outer red circle */}
                <mesh position={[0, 0, 0.01]}>
                    <circleGeometry args={[0.6, 32]} />
                    <meshStandardMaterial color="#ff0000" side={THREE.DoubleSide} />
                </mesh>
                
                {/* Middle white circle */}
                <mesh position={[0, 0, 0.02]}>
                    <circleGeometry args={[0.45, 32]} />
                    <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
                </mesh>
                
                {/* Inner red circle */}
                <mesh position={[0, 0, 0.03]}>
                    <circleGeometry args={[0.3, 32]} />
                    <meshStandardMaterial color="#ff0000" side={THREE.DoubleSide} />
                </mesh>
                
                {/* Center white circle */}
                <mesh position={[0, 0, 0.04]}>
                    <circleGeometry args={[0.15, 32]} />
                    <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
                </mesh>
                
                {/* Bullseye */}
                <mesh position={[0, 0, 0.05]}>
                    <circleGeometry args={[0.05, 32]} />
                    <meshStandardMaterial color="#ff0000" side={THREE.DoubleSide} />
                </mesh>
            </group>
        </group>
    );
}