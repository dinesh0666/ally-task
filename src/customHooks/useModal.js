import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState({});
  function showModal(index) {
    setIsShowing({ [index]: true });
  }
  function hideModal(index) {
    setIsShowing({ [index]: false });
  }

  return {
    isShowing,
    showModal,
    hideModal,
  };
};

export default useModal;