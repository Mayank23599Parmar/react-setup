import React from "react";

const Modal = ({ handleClose, show, children,deleteRowData }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <div className="button-action-wrapper">
        <button onClick={deleteRowData} className="btn-action delete">
          Yes
        </button>
        <button onClick={handleClose} className="btn-action no">
          No
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;