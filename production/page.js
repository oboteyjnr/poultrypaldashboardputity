'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/DashboardCard';
import ProductionChart from '../components/ProductionChart';
import { usePoultry } from '../context/PoultryContext';

export default function Production() {
  const { eggs, setEggs } = usePoultry();

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
        <DashboardCard title="Production">
          <p>Eggs collected today: {eggs || 0}</p>
          <button onClick={() => setEggs((Number(eggs) || 0) + 1)}>Collect Egg</button>
        </DashboardCard>
        <ProductionChart />
      </main>
      <Footer />
    </>
  );
}