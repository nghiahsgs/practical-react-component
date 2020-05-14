import React from "react";
import {BounceLoader, BarLoader, BeatLoader} from "react-spinners"

const TestReactSpinner = () => {
  return <div>
    <BounceLoader size={24} color='red' loading/>
    <br/>
    <BarLoader loading/>
    <br/>
    <BeatLoader loading/>
  </div>;
};

export default TestReactSpinner;
