// components/Nav.js
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Website</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>

      </ul>
      <button className={styles.contactMeBtn}>Contact Me</button>
    </nav>
  );
}
