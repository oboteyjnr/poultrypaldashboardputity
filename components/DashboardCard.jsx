import styles from '../styles/layout.module.css';
import PropTypes from 'prop-types';

export default function DashboardCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.sectionHeader}>Dash Board</h2>
      <div>{children}</div>
    </div>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};