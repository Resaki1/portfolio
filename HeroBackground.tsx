"use client";

import { useEffect, useState } from "react";
import {
  Shader,
  CursorRipples,
  Liquify,
  SineWave,
  SolidColor,
  WaveDistortion,
  FilmGrain,
  ChromaFlow,
} from "shaders/react";
import "./HeroBackground.css";

export default function ShaderEffect() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (windowHeight > 0) {
        // Clamps value between 1 (top of page) and 0 (1 screen height down)
        const calculatedOpacity = Math.max(0, 1 - scrollY / windowHeight);
        setOpacity(calculatedOpacity);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-background">
      <Shader toneMapping="agx">
        <SolidColor color="#050f0a" />
        <SineWave
          amplitude={0.36}
          blendMode="normal-oklch"
          color="#123524"
          frequency={0.2}
          position={{
            x: 0.65,
            y: 0.67,
          }}
          softness={0.55}
          speed={0.1}
          thickness={0.72}
          opacity={opacity - 0.01}
        />
        <SineWave
          amplitude={0.17}
          blendMode="normal-oklch"
          color="#1f5b3e"
          frequency={0.2}
          position={{
            x: 0.6,
            y: 0.51,
          }}
          softness={0.54}
          speed={0.1}
          thickness={0.35}
          opacity={opacity - 0.01}
        />
        <WaveDistortion angle={299} frequency={0.3} speed={0.2} strength={1} />
        <CursorRipples visible={false} />
        <Liquify intensity={20} visible={true} />
        <ChromaFlow
          baseColor="#123524"
          downColor="#1f5b3e"
          intensity={0.5}
          leftColor="#1f5b3e"
          radius={2.4}
          rightColor="#1f5b3e"
          upColor="#1f5b3e"
        />
        <FilmGrain strength={0.07} />
      </Shader>
    </div>
  );
}
