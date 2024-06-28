// components/Nav.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
        <footer id="contact" className={styles.footer}>
        <div className={styles.container}>
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.name}>Firlandi Althaf Rizqi Ansyari</p>
            <p className={styles.contactDetail}>Email: <a href="mailto:faransyari@gmail.com" className={styles.contactLink}>faransyari@gmail.com</a></p>
            <p className={styles.contactDetail}>Phone: <a href="tel:+61423704207" className={styles.contactLink}>+61 423 704 207</a></p>
            <p className={styles.contactDetail}><a href="https://linkedin.com/in/firlandi-althaf-rizqi-ansyari-97382015a" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a></p>
        </div>
        </footer>

  );
}
