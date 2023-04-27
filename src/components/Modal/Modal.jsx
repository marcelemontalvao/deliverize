import { motion } from "framer-motion";
import { ModalOverlay } from "./ModalStyles";

const modalVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Modal = ({ onClose, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={handleOutsideClick}>
      <motion.div
        className="modal"
        variants={modalVariants}
        initial="closed"
        animate="open"
        exit="closed"
        onKeyDown={handleKeyDown}
      >
        {children}
      </motion.div>
    </ModalOverlay>
  );
};

export default Modal;
