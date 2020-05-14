import React from "react";
import "./styles.css";
import ReactToastify from "./components/ReactToastify";
import ReactModel from "./components/ReactModel";
import Tippy from "./components/TippyJS";
import CountUpTest from "./components/CountUpTest";
import TestIdleTimer from "./components/TestIdleTimer";
import TestColortPicker from "./components/TestColorPicker";
import TestReactDatePicker from "./components/TestReactDatePicker";
import TestReactPlayer from "./components/TestReactPlayer";
import TestReactSpinner from "./components/TestReactSpinner";

// import {IconContext} from "react-icons"
// import { FaApple } from "react-icons/fa";
// import { BsFillHeartFill } from "react-icons/bs";

export default function App() {
  return (
    // <IconContext.Provider value={{color:"red",size:"50px"}}>
    // <div className="App">
    //   <FaApple color="green" size="50px"/>
    //   <br/>
    //   <BsFillHeartFill />
    // </div>
    // </IconContext.Provider>

    <div className="App">
      {/* <ReactToastify />
      <ReactModel /> */}
      {/* <Tippy /> */}
      {/* <CountUpTest /> */}
      {/* <TestIdleTimer /> */}
      {/* <TestColortPicker /> */}
      {/* <TestReactDatePicker /> */}
      {/* <TestReactPlayer/> */}
      <TestReactSpinner />
    </div>
  );
}
