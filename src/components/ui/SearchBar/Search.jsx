import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import Modal from "../Modal/Modal";
import SearchBar from "./SearchBar";
import SearchIcon from "../../../assets/icons/search.svg?react";
import styles from "./Search.module.css";

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useClickOutside(modalRef, setShowModal);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className={styles.searchBtn}
      >
        <span className={styles.srOnly}>Open search modal</span>
        <SearchIcon />
      </button>
      {(showModal || modalRef.current) &&
        createPortal(
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            ref={modalRef}
          >
            {showModal && <SearchBar />}
          </Modal>,
          document.body
        )}
    </>
  );
}
