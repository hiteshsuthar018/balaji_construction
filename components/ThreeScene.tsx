'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8),
    ];

    const materials = [
      new THREE.MeshLambertMaterial({ color: 0xff6b35, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x3498db, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0xf39c12, transparent: true, opacity: 0.8 }),
      new THREE.MeshLambertMaterial({ color: 0x27ae60, transparent: true, opacity: 0.8 }),
    ];

    // Create and position shapes
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);

      // Random positioning
      shape.position.x = (Math.random() - 0.5) * 20;
      shape.position.y = (Math.random() - 0.5) * 20;
      shape.position.z = (Math.random() - 0.5) * 20;

      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      shape.rotation.z = Math.random() * Math.PI;

      // Store rotation speeds
      (shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };

      // Store floating speeds
      (shape as any).floatingSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };

      shapes.push(shape);
      scene.add(shape);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate shapes
      shapes.forEach((shape) => {
        // Rotation
        shape.rotation.x += (shape as any).rotationSpeed.x;
        shape.rotation.y += (shape as any).rotationSpeed.y;
        shape.rotation.z += (shape as any).rotationSpeed.z;

        // Floating movement
        shape.position.x += (shape as any).floatingSpeed.x;
        shape.position.y += (shape as any).floatingSpeed.y;
        shape.position.z += (shape as any).floatingSpeed.z;

        // Boundary checking
        if (shape.position.x > 10 || shape.position.x < -10) {
          (shape as any).floatingSpeed.x *= -1;
        }
        if (shape.position.y > 10 || shape.position.y < -10) {
          (shape as any).floatingSpeed.y *= -1;
        }
        if (shape.position.z > 10 || shape.position.z < -10) {
          (shape as any).floatingSpeed.z *= -1;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!renderer || !camera) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeScene;