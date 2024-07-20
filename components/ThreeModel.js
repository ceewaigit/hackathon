// components/ThreeModel.js

'use client';

import React, { Suspense, useEffect, memo, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = ({ url, modelPosition }) => {
    const { scene, animations } = useGLTF(url);
    const { ref, mixer } = useAnimations(animations, scene);

    useEffect(() => {
        if (animations.length > 0) {
            animations.forEach((clip) => mixer.clipAction(clip).play());
        }
    }, [animations, mixer]);

    const memoizedScene = useMemo(() => {
        scene.traverse((child) => {
            if (child.material) {
                child.material.transparent = false;
                child.material.opacity = 1;
            }
        });

        return scene;
    }, [scene]);

    return <primitive object={memoizedScene} ref={ref} position={modelPosition} />;
};

const RotatingModel = ({ url, modelPosition }) => {
    const groupRef = React.useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05; // Adjust the 0.2 value to control rotation speed
        }
    });

    return (
        <group ref={groupRef}>
            <Model url={url} modelPosition={modelPosition} />
        </group>
    );
};

const ThreeModel = memo(({ modelUrl, zoomLength, position, modelPosition }) => {
    return (
        <Canvas camera={{ position: position, zoom: zoomLength }}>
            <Suspense fallback={null}>
                <RotatingModel url={modelUrl} modelPosition={modelPosition} />
            </Suspense>
        </Canvas>
    );
});

ThreeModel.displayName = 'ThreeModel';

export default ThreeModel;
