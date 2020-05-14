import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default function ReactToastify() {
  // const notify = () => toast("nghiahsgs");
  const notify = () => {
    toast("nghiahsgs");
    toast.success("nghiahsgs");
    toast.info("nghiahsgs");
    toast.error("nghiahsgs");
    toast.warning("nghiahsgs");

    toast.success("nghiahsgs", { position: toast.POSITION.TOP_CENTER });
    toast.success("nghiahsgs", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    });
  };
  return (
    <div>
      <button onClick={notify}>Click me</button>
    </div>
  );
}
