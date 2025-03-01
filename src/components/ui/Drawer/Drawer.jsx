import { useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { usePreventBodyScroll } from "../../../hooks/usePreventBodyScroll";
import styles from "./Drawer.module.css";

export default function Drawer({ isOpen, onClose, children }) {
  const drawerRef = useRef(null);

  useClickOutside(drawerRef, onClose);

  usePreventBodyScroll(isOpen);

  if (!isOpen && !drawerRef.current) {
    return null;
  }

  return (
    <div className={styles.drawer}>
      <div className={`${isOpen ? styles.drawerBackdrop : ""}`} />
      <div
        ref={drawerRef}
        className={`${styles.panel} ${
          isOpen ? `${styles.slideIn} ${styles.open}` : `${styles.slideOut}`
        }`}
      >
        <hr className={styles.divider} />
        {children}
      </div>
    </div>
  );
}
