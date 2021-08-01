import React, { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { calculateHeight } from "../utils/util";
import Modal from "../components/Modal";
import useModal from "../customHooks/useModal";
import PropTypes from "prop-types";

function OkrListComponent({ okrData }) {
  const [open, setOpen] = useState("");
  const { isShowing, showModal, hideModal } = useModal();

  const onOpen = (index) => {
    if (open !== index) {
      setOpen(index);
    } else {
      setOpen("");
    }
  };
  return (
    <div className={"okr-list-container"}>
      <div className={"okr-main-box"}>
        {okrData.map((val, index) => {
          return (
            <div key={val.title + val.id} className={"main-list"}>
              <MdArrowDropDownCircle
                onClick={() => onOpen(index)}
                className={open === index ? "drop-icon" : "drop-icon active"}
              />

              <div className={"list-title"}>
                <FaRegUserCircle className={"list-icon"} />
                <div className={"heading"} onClick={() => showModal(index)}>
                  {val.title}
                </div>
                <Modal
                  isShowing={isShowing[index]}
                  hide={() => hideModal(index)}
                  modalContent={val}
                />
              </div>
              <div
                className={"extended-menu"}
                style={{
                  height:
                    open === index ? calculateHeight(val.children) : "0px",
                }}
              >
                <ul>
                  {val.children &&
                    val.children.map((childOkr) => {
                      return (
                        <li key={childOkr.title}>
                          <FaRegUserCircle className={"list-icon"} />
                          <p>{childOkr.title}</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
OkrListComponent.propTypes = {
  okrData: PropTypes.array.isRequired,
};
export default OkrListComponent;