import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Augment React's JSX namespace to include Three.js elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      instancedMesh: any;
      dodecahedronGeometry: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      fog: any;
    }
  }
}

// Fallback for global JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      cylinderGeometry: any;
      meshStandardMaterial: any;
      instancedMesh: any;
      dodecahedronGeometry: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      fog: any;
    }
  }
}

const Hexagon = ({ position, color, speed, scale, rotation }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Random rotation offset
  const randomRotationAxis = useMemo(() => {
    return {
        x: Math.random() * 0.01 * speed,
        y: Math.random() * 0.01 * speed,
        z: Math.random() * 0.01 * speed
    }
  }, [speed]);

  useFrame(() => {
      if(!meshRef.current) return;
      meshRef.current.rotation.x += randomRotationAxis.x;
      meshRef.current.rotation.y += randomRotationAxis.y;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation}>
        <cylinderGeometry args={[1, 1, 0.5, 6]} />
        <meshStandardMaterial 
            color={color} 
            roughness={0.1} 
            metalness={0.8}
            envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
    const count = 100;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for(let i=0; i<count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = Math.random() * 100 - 50;
            const y = Math.random() * 100 - 50;
            const z = Math.random() * 100 - 50;
            temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            
            dummy.position.set(
                (particle.x + Math.cos(t / 10) * 10) + Math.sin(t) * 2,
                (particle.y + Math.sin(t / 10) * 10) + Math.cos(t) * 2,
                (particle.z + Math.cos(t / 20) * 10) 
            );
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#ea580c" roughness={0.5} metalness={0.5} opacity={0.6} transparent />
        </instancedMesh>
    )
}


const SceneContent = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={5} color="#ea580c" distance={20} />
            <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

            {/* Large background shapes */}
            <Hexagon position={[-8, 4, -5]} color="#1e293b" speed={0.5} scale={[3,3,3]} rotation={[Math.PI/4, 0, 0]} />
            <Hexagon position={[9, -5, -8]} color="#0f172a" speed={0.4} scale={[5,5,5]} rotation={[0, Math.PI/3, 0]} />
            
            {/* Midground hero shapes */}
            <Hexagon position={[-3, 0, -2]} color="#334155" speed={0.8} scale={[1.2,1.2,1.2]} rotation={[0.5, 0.5, 0]} />
            <Hexagon position={[5, 2, -3]} color="#475569" speed={1} scale={[1,1,1]} rotation={[-0.5, 0.2, 0]} />
            
            {/* Accent shapes */}
            <Hexagon position={[3, -3, 0]} color="#ea580c" speed={1.5} scale={[0.5,0.5,0.5]} rotation={[0, 0, 0.5]} />
            <Hexagon position={[-4, 3, 1]} color="#f97316" speed={1.2} scale={[0.3,0.3,0.3]} rotation={[0.5, 0.5, 0]} />

            <Particles />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <Environment preset="night" blur={0.6} />
            <fog attach="fog" args={['#020617', 5, 30]} />
        </>
    )
}

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-slate-950">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }} dpr={[1, 2]}>
            <SceneContent />
        </Canvas>
        {/* Gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default Scene3D;