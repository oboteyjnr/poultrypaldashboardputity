import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/flock">Flock</Link></li>
        <li><Link href="/feed">Feed</Link></li>
        <li><Link href="/production">Production</Link></li>
      </ul>
    </nav>
  );
}