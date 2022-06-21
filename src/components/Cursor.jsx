import React from "react";
import { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  useEffect(() => {
    const cursorOffset = 6;
    if (cursorRef.current == null || cursorRef == null) return;
    if (cursorOutlineRef.current == null || cursorRef == null) return;
    // chain movement of object to movement of cursor
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      if (cursorOutlineRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " +
          (e.pageY - cursorOffset) +
          "px; left: " +
          (e.pageX - cursorOffset) +
          "px;"
      );
      if (cursorOutlineRef.current == null) return;
      cursorOutlineRef.current.setAttribute(
        "style",
        "top: " + (e.pageY - 8) + "px; left: " + (e.pageX - 8) + "px;"
      );
    });
    // add animation when clicking
  }, []);
  return (
    <>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
      <div className="cursor" ref={cursorRef}></div>;
    </>
  );
};

export default Cursor;
