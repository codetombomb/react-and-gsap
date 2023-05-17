import { useLayoutEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import { useRef } from "react";
import { gsap } from "gsap";

function App() {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".loading-text-pre-post", {
        opacity: 0,
        duration: 3,
      });
      gsap.to(".loading-text-mid", {
        color: "#F8FF07",
        delay: 2.5,
        fontSize: "9em",
        duration: 1.5,
      });
    });
    return () => ctx.revert()
  });

  return (
    <div>
      <div>
        <LoadingScreen preText={"t"} midText={"o"} postText={"m"} comp={comp} />
      </div>
    </div>
  );
}

export default App;
