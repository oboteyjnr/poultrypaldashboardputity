import styles from '../styles/layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} PoultryPal Dashboard</p>
    </footer>
  );
}