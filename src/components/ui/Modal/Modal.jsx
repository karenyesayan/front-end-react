import { usePreventBodyScroll } from "../../../hooks/usePreventBodyScroll";
import CloseIcon from "../../../assets/icons/close.svg?react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, centered, ref, children }) {
  usePreventBodyScroll(isOpen);

  return (
    <div
      className={isOpen ? styles.modal : styles.fadeOut}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${styles.backdrop} ${
          isOpen ? styles.backdropFadeIn : styles.backdropFadeOut
        }`}
        aria-hidden="true"
      />
      <div className={styles.content}>
        <div className={centered ? styles.centeredWrapper : styles.wrapper}>
          <div
            ref={ref}
            className={`${styles.body} ${
              isOpen ? styles.scaleUp : styles.scaleDown
            }`}
          >
            <div className={styles.container}>
              <button
                className={
                  centered ? styles.primaryModalToggle : styles.modalToggle
                }
                type="button"
                data-autofocus
                onClick={onClose}
              >
                <span className={styles.srOnly}>Close</span>
                <CloseIcon />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
