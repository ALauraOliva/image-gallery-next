"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("button");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursor) {
        gsap.to(cursor, { x: clientX, y: clientY });
      }
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target;
      if (link) {
        gsap.to(cursor, {
          background: "transparent",
          border: "0.2px solid #6D9886",
          scale: 2.5,
        });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        background: "rgb(63 63 70 /1)",
        border: "none",
      });
    };

    if (isWideScreen) {
      document.addEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [isWideScreen]);

  if (!isWideScreen) {
    return null;
  }

  return (
    <div>
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[60] p-3 flex justify-center items-center bg-zinc-700"
      ></div>
    </div>
  );
}
