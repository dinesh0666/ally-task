import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ isShowing, hide, modalContent }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <div>{modalContent.title}</div>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div>Category : {modalContent.category}</div>
              <div>Metric Name : {modalContent.metric_name}</div>
              <div>Metric Start : {modalContent.metric_start}</div>
              <div>Metric Target : {modalContent.metric_target}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.array,
  hide: PropTypes.func.isRequired,
  modalContent: PropTypes.object.isRequired,
};
export default Modal;