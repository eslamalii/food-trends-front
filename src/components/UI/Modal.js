import React from "react";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";

export default function Modal(props) {
  let directionClass = "justify-center";

  if (props.direction == "right") {
    directionClass = "justify-end";
  }
  if (props.direction == "left") {
    directionClass = "justify-start";
  }

  function hideModal(e) {
    if (e.target !== e.currentTarget) return;
    props.setModalExists(false);
  }

  return (
    <>
      {createPortal(
        <div
          className={`fixed left-0 top-0 z-50 flex h-screen w-screen cursor-[crosshair] items-center bg-[#0000006d] ${directionClass} me-5`}
          data-aos="fade"
          onClick={hideModal}
        >
          <div className={props.className} data-aos={props.effect}>
            <div className="flex h-full w-full flex-col">
              <span
                className="relative right-4 top-4 w-fit cursor-pointer self-end text-xl text-base-400 hover:font-bold hover:text-red-400"
                onClick={hideModal}
              >
                X
              </span>
              {props.children}
            </div>
          </div>
        </div>,
        document.getElementById("modals")
      )}
    </>
  );
}
