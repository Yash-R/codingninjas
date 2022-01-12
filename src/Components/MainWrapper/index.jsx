import React from "react";
import style from "./index.module.css";
import clsx from "clsx";

export default function index({ children }) {
  return (
    <>
      {/* <div className={style.wrapper}> */}
      <div className={clsx(style.circuits, "circuits")}>
        <img
          alt="circuits_image"
          src="https://files.codingninjas.com/circuit-1-9465.svg"
        />
      </div>
      <div className={clsx(style.circuits_gradient, "circuits_gradient")}>
        <img src="https://files.codingninjas.com/group-3932-9400.svg" alt="" />
      </div>
      {children}
      {/* </div> */}
    </>
  );
}
