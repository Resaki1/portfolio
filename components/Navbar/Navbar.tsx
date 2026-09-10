"use client";

import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText =
      "position:absolute; top:0; height:1px; width:100%; pointer-events:none;";
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const atTop = entry.isIntersecting;
        const navEl = navRef.current;

        const transitionTarget =
          navEl && "startViewTransition" in navEl
            ? navEl
            : "startViewTransition" in document
              ? document
              : null;

        if (transitionTarget) {
          const transition = (
            transitionTarget as {
              startViewTransition: (cb: () => void) => { ready: Promise<void> };
            }
          ).startViewTransition(() => {
            flushSync(() => {
              setIsAtTop(atTop);
            });
          });

          transition.ready.catch(() => {});
        } else {
          setIsAtTop(atTop);
        }
      },
      { threshold: [1.0] },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <ul className={isAtTop ? "row" : "column"}>
        <li style={{ viewTransitionName: "nav-item-1" }}>
          <a href="#about">ABOUT</a>
        </li>
        <li style={{ viewTransitionName: "nav-item-2" }}>
          <a href="#projects">PROJECTS</a>
        </li>
        <li style={{ viewTransitionName: "nav-item-3" }}>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
