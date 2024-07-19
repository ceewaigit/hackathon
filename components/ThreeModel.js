// components/ThreeModel.js

'use client';

import React, { Suspense, useEffect, memo, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
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

const ThreeModel = memo(({ modelUrl, zoomLength, position, modelPosition }) => {
    return (
        <Canvas camera={{ position: position, zoom: zoomLength }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 0]} intensity={1} />
            <pointLight position={[0, 5, 0]} intensity={2} />
            <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={0.6} />
            <Suspense fallback={null}>
                <Model url={modelUrl} modelPosition={modelPosition} />
            </Suspense>
        </Canvas>
    );
});

export default ThreeModel;