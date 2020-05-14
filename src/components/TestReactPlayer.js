import React from "react";
import ReactPlayer from "react-player";
const TestReactPlayer = () => {
  return (
    <ReactPlayer
      width={500}
      height={300}
      controls
      url="https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12&pbjreload=10"
      onStart={() => {
        console.log("onStart");
      }}
      onEnded={() => {
        console.log("onEnded");
      }}
      onPause={() => {
        console.log("onPause");
      }}
      onReady={() => {
        console.log("onReady");
      }}
      onError={() => {
        console.log("onError");
      }}
    />
  );
};
export default TestReactPlayer;
