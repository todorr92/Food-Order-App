import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  // level 3, level 2 is in Cart.js, and level 1 is in App.js
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    // or use React.Fragment
    <Fragment>
      {/* create portals for better modal use and HTML structure */}
      {ReactDOM.createPortal(
        // continuation of passing props like above in Backdrop, so this would be level 4, level 5 will be in Cart.js, adding props on Modal component. Level 3 is above in Backdrop, level 2 is in Cart.js, and level 1 is in App.js
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
