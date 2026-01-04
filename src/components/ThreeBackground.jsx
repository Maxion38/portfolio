// src/components/ThreeBackground.jsx
import { useEffect, useRef } from 'react';
import { initThree } from '../three/main.js'; 

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    // On initialise Three.js dans le container
    const cleanup = initThree(containerRef.current);

    // Cleanup quand le composant est démonté
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1 // Pour rester en arrière-plan
      }}
    />
  );
}
