'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import FlockTable from '../components/FlockTable';

export default function Flock() {
  const [count, setCount] = useState(100);

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <DashboardCard title="Flock Management">
          <p>Current flock size: {count}</p>
          <button onClick={() => setCount(count + 1)}>Add Bird</button>
          <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Remove Bird</button>
        </DashboardCard>
        <FlockTable />
      </main>
      <Footer />
    </>
  );
}