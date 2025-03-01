import styles from "./NavBar.module.css";

export default function Navbar({ navigation, isNested }) {
  return (
    <ul className={isNested ? styles.subMenu : styles.menu}>
      {navigation.map(({ id, title, segment, icon, children }) => (
        <li key={id} className={styles.item}>
          {children ? (
            <button type="button" className={styles.menuToggle}>
              {title}
              {icon}
            </button>
          ) : (
            <a href={segment}>
              {title}
              {icon || null}
            </a>
          )}
          {children && <Navbar navigation={children} isNested={true} />}
        </li>
      ))}
    </ul>
  );
}
