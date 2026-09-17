import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebglSupported(false);
      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return () => mediaQuery.removeEventListener('change', handleMotionChange);

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x171a3a, 0.04);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (e) {
      setWebglSupported(false);
      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }

    // Colors aligned with brand identity
    const COLOR_TEAL = 0x397c78;
    const COLOR_JADE = 0x65b89b;
    const COLOR_BRASS = 0xc5a46d;
    const COLOR_PETROL = 0x123b46;
    const COLOR_INDIGO = 0x20365f;

    // Root Group for Mouse Parallax
    const instrumentGroup = new THREE.Group();
    scene.add(instrumentGroup);

    // 1. Central Faceted Valuation Prism (Octahedron with Dual Shells)
    const prismGeo = new THREE.OctahedronGeometry(1.6, 0);
    const prismMat = new THREE.MeshStandardMaterial({
      color: COLOR_PETROL,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.55,
      wireframe: false,
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    instrumentGroup.add(prismMesh);

    // Brass wireframe cage around the prism
    const wireGeo = new THREE.OctahedronGeometry(1.62, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: COLOR_BRASS,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    instrumentGroup.add(wireMesh);

    // 2. Layered Translucent Financial-Model Planes (Business & Financials)
    const planesGroup = new THREE.Group();
    const planeGeo = new THREE.PlaneGeometry(3.6, 2.2);
    const planeHeights = [-0.9, 0.0, 0.9];
    const planeColors = [COLOR_TEAL, COLOR_INDIGO, COLOR_JADE];

    planeHeights.forEach((h, idx) => {
      const planeMat = new THREE.MeshStandardMaterial({
        color: planeColors[idx],
        roughness: 0.3,
        metalness: 0.7,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.rotation.x = Math.PI / 2.3;
      plane.position.y = h;
      planesGroup.add(plane);

      // Fine perimeter line for each plane
      const edges = new THREE.EdgesGeometry(planeGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: idx === 1 ? COLOR_BRASS : COLOR_JADE,
        transparent: true,
        opacity: 0.6,
      });
      const edgeLine = new THREE.LineSegments(edges, edgeMat);
      edgeLine.rotation.x = Math.PI / 2.3;
      edgeLine.position.y = h;
      planesGroup.add(edgeLine);
    });
    instrumentGroup.add(planesGroup);

    // 3. Fine Orbital Rings (Governance & Risk Boundaries)
    const ring1Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: COLOR_BRASS,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    instrumentGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.1, 0.012, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: COLOR_TEAL,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    instrumentGroup.add(ring2);

    // 4. Architectural Blocks (Symbolizing Foundational Assets)
    const blocksGroup = new THREE.Group();
    const boxGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const boxMat = new THREE.MeshStandardMaterial({
      color: COLOR_JADE,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.75,
    });

    const blockPositions = [
      [-1.9, 1.4, 0.6],
      [1.8, -1.2, -0.4],
      [-1.4, -1.5, 0.8],
      [1.7, 1.3, -0.7],
    ];

    blockPositions.forEach((pos) => {
      const block = new THREE.Mesh(boxGeo, boxMat);
      block.position.set(pos[0], pos[1], pos[2]);
      blocksGroup.add(block);
    });
    instrumentGroup.add(blocksGroup);

    // 5. Floating Analytical Data Points
    const particlesCount = 45;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 7;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: COLOR_MIST_GLOW(COLOR_JADE),
      size: 0.055,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    instrumentGroup.add(particles);

    function COLOR_MIST_GLOW(c: number) {
      return new THREE.Color(c);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const tealLight = new THREE.DirectionalLight(COLOR_TEAL, 2.2);
    tealLight.position.set(5, 4, 6);
    scene.add(tealLight);

    const brassLight = new THREE.PointLight(COLOR_BRASS, 2.5, 12);
    brassLight.position.set(-4, -3, 3);
    scene.add(brassLight);

    const petrolFill = new THREE.DirectionalLight(COLOR_PETROL, 1.5);
    petrolFill.position.set(0, -5, -4);
    scene.add(petrolFill);

    // Mouse Interaction for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      mouseX = (clientX / windowWidth - 0.5) * 2;
      mouseY = -(clientY / windowHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!mediaQuery.matches) {
        // Calm ambient drift
        prismMesh.rotation.y = elapsedTime * 0.12;
        prismMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15;

        wireMesh.rotation.y = elapsedTime * 0.12;
        wireMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15;

        ring1.rotation.z = elapsedTime * 0.08;
        ring2.rotation.z = -elapsedTime * 0.06;

        planesGroup.rotation.y = Math.sin(elapsedTime * 0.1) * 0.18;
        blocksGroup.rotation.y = -elapsedTime * 0.09;

        // Smooth Lerping of Parallax
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        instrumentGroup.rotation.y = targetX * 0.35 + Math.sin(elapsedTime * 0.1) * 0.1;
        instrumentGroup.rotation.x = -targetY * 0.25;
        instrumentGroup.position.y = Math.sin(elapsedTime * 0.3) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMotionChange);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      prismGeo.dispose();
      prismMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      planeGeo.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      boxGeo.dispose();
      boxMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  if (!webglSupported || prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative w-64 h-64 border border-finance-teal/30 rounded-2xl bg-finance-petrol/20 backdrop-blur-md flex items-center justify-center">
          <div className="absolute inset-4 border border-finance-brass/40 rounded-xl rotate-12"></div>
          <div className="absolute inset-8 border border-finance-jade/40 rounded-lg -rotate-6"></div>
          <div className="w-16 h-16 rounded-full border border-finance-brass flex items-center justify-center">
            <div className="w-6 h-6 rotate-45 border-2 border-finance-jade"></div>
          </div>
          <div className="absolute bottom-3 text-[10px] font-mono uppercase tracking-widest text-finance-lavender">
            Research Instrument
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full min-h-[420px] relative pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Decorative metadata badges embedded in 3D frame */}
      <div className="absolute top-4 right-4 hidden md:flex flex-col items-end gap-1.5 opacity-70">
        <span className="text-[10px] font-mono tracking-widest text-finance-jade bg-finance-petrol/60 px-2.5 py-0.5 rounded border border-finance-teal/30">
          SYS // VALUATION PRISM
        </span>
        <span className="text-[9px] font-mono text-finance-lavender">
          AXES: 4D RESEARCH MATRIX
        </span>
      </div>
    </div>
  );
};
