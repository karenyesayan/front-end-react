import CloseIcon from "../../../assets/icons/close.svg?react";
import BurgerBarsIcon from "../../../assets/icons/burger-bars.svg?react";
import styles from "./MenuToggle.module.css";

export default function MenuToggle({ variant, onToggle }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(variant === "open")}
      className={`${styles.toggleBtn} ${
        variant === "close" && styles.closeBtn
      }`}
    >
      <span className={styles.srOnly}>{variant} menu</span>
      {variant === "close" ? (
        <CloseIcon className={styles.closeIcon} />
      ) : (
        <BurgerBarsIcon className={styles.barsIcon} />
      )}
    </button>
  );
}
