import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
const TestIdleTimer = () => {
  const [isLogin, setisLogin] = useState(true);
  const IdleTimerRef = useRef(null);
  const onIdle = () => {
    console.log("time out");
    setisLogin(false);
  };
  return (
    <>
      {isLogin ? <h2>home</h2> : <h2>pls login</h2>}
      <IdleTimer ref={IdleTimerRef} timeout={3 * 1000} onIdle={onIdle} />
    </>
  );
};

export default TestIdleTimer;
