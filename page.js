'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DashboardCard from './components/DashboardCard';
import FlockTable from './components/FlockTable';
import ProductionChart from './components/ProductionChart';
import FeedPlanner from './components/FeedPlanner';
import { usePoultry } from './context/PoultryContext';
import styles from './styles/layout.module.css';

export default function Home() {
  const { birds, setBirds, eggs, setEggs, feed, setFeed } = usePoultry();

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '2rem' }}>
          Welcome to PoultryPal Dashboard
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
          <DashboardCard title="Total Birds">
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="number"
                min={0}
                value={birds}
                onChange={e => setBirds(e.target.value)}
                placeholder="Enter total birds"
                style={{ width: 100 }}
                required
              />
              <span>{birds || 'No data'}</span>
            </form>
          </DashboardCard>

          <DashboardCard title="Eggs Today">
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="number"
                min={0}
                value={eggs}
                onChange={e => setEggs(e.target.value)}
                placeholder="Enter eggs today"
                style={{ width: 100 }}
                required
              />
              <span>{eggs || 'No data'}</span>
            </form>
          </DashboardCard>

          <DashboardCard title="Feed Remaining">
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <input
                type="number"
                min={0}
                value={feed}
                onChange={e => setFeed(e.target.value)}
                placeholder="Enter feed (kg)"
                style={{ width: 101 }}
                required
              />
              <span>{feed ? `${feed} kg` : 'No data'}</span>
            </form>
          </DashboardCard>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 className={styles.sectionHeader}>Quick Links</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/flock" style={{ color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline' }}>Flock Management</a>
            <a href="/feed" style={{ color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline' }}>Feed Management</a>
            <a href="/production" style={{ color: '#1976d2', fontWeight: 'bold', textDecoration: 'underline' }}>Production</a>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Flock Overview</h2>
          <FlockTable />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Production Summary</h2>
          <ProductionChart />
        </section>

        <section>
          <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Feed Planner</h2>
          <FeedPlanner />
        </section>
      </main>
      <Footer />
    </>
  );
}