'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import FeedPlanner from '../components/FeedPlanner';
import { usePoultry } from '../context/PoultryContext';

export default function Feed() {
  const { feed, setFeed } = usePoultry();

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <DashboardCard title="Feed Management">
          <p>Feed available: {feed || 0} kg</p>
          <button 
            onClick={() => setFeed((Number(feed) || 0) - 1)} 
            disabled={!feed || feed <= 0}
          >
            Dispense 1kg Feed
          </button>
          <button onClick={() => setFeed((Number(feed) || 0) + 5)}>Add 5kg Feed</button>
        </DashboardCard>
        <FeedPlanner />
      </main>
      <Footer />
    </>
  );
}