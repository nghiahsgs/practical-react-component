import React, { useState } from "react";
import { ChromePicker } from "react-color";
const TestColortPicker = () => {
  const [color, setcolor] = useState("#fff");
  const [isShow, setisShow] = useState("false");

  return (
    <div>
      <button
        onClick={() => {
          setisShow(!isShow);
        }}
      >
        {isShow ? "hide color picker" : "show color picker"}
      </button>
      <p>Current color : {color}</p>
      {isShow && (
        <ChromePicker color={color} onChange={color => setcolor(color.hex)} />
      )}
    </div>
  );
};

export default TestColortPicker;
