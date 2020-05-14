import React from "react";
import Tippy from "@tippyjs/react";

// function ColorToolTip() {
//   return <h2 style={{ color: "red" }}>hello</h2>;
// }
const ColorToolTip = () => {
  return <h2 style={{ color: "red" }}>hello</h2>;
};
const renderButton = () => {
  return <button>Hoverzz</button>;
};
export default function TippyJS() {
  return (
    <div>
      <Tippy content="nghiahsgs">{renderButton()}</Tippy>

      <Tippy content={<h1>nghiahsgs</h1>}>
        <button>Hover</button>
      </Tippy>

      <Tippy content={ColorToolTip()}>
        <button>Hover</button>
      </Tippy>
    </div>
  );
}
