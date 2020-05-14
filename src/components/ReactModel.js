import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ReactModel() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setmodalIsOpen(true)}>show</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          content: {
            color: "red",
            width: "50%",
            heigh: "50%",
            margin: "0 auto"
          },
          overlay: { background: "gray" }
        }}
      >
        {/* <Modal isOpen={modalIsOpen}> */}
        <h1>Hello cac pan</h1>
        <button onClick={() => setmodalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
