import React, { useRef } from "react";

function LoadingScreen({ preText, midText, postText, comp }) {
  return (
    <h1 className="loading-text" ref={comp}>
      <span className="loading-text-pre-post">{preText}</span>
      <span className="loading-text-mid">{midText}</span>
      <span className="loading-text-pre-post">{postText}</span>
    </h1>
  );
}

export default LoadingScreen;
