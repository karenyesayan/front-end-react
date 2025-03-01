import styles from "./Logo.module.css";

export default function Logo({ logoSVG, baseUrl }) {
  return (
    <a className={styles.brand} href={baseUrl}>
      <span className={styles.srOnly}>Logo</span>
      <img alt="Website logo" src={logoSVG} />
    </a>
  );
}
