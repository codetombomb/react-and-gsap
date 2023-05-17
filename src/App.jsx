import { useLayoutEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import { useRef } from "react";
import { gsap } from "gsap";

function App() {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".loading-text-pre-post", {
        opacity: 1
      })

      gsap.to(".loading-text-pre-post", {
        opacity: 0,
        duration: 6
      })
      gsap.to(".loading-text-mid", {
        color: "#F8FF07",
        delay: 4,
        fontSize: "9em",
        duration: 3,
      })
    });
  });

  return (
    <div ref={comp}>
      <div>
        <LoadingScreen preText={"t"} midText={"o"} postText={"m"} comp={comp} />
      </div>
    </div>
  );
}

export default App;
