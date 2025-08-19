'use client';

import { useRef, useEffect, useState } from 'react';
import styles from '../styles/layout.module.css';

export default function ProductionChart() {
  const chartRef = useRef(null);
  const [eggCounts, setEggCounts] = useState(Array(7).fill(''));
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const ctx = chartRef.current.getContext('2d');
      import('chart.js/auto').then(({ default: Chart }) => {
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Eggs Collected',
                data: eggCounts.map(e => Number(e) || 0),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: true },
            },
          },
        });
        return () => chart.destroy();
      });
    }
  }, [submitted, eggCounts]);

  const handleChange = (idx, value) => {
    const updated = [...eggCounts];
    updated[idx] = value;
    setEggCounts(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.card}>
      <h3>Production Chart</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
            <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', color: '#1976d2' }}>{day}</label>
              <input
                type="number"
                min={0}
                value={eggCounts[idx]}
                onChange={e => handleChange(idx, e.target.value)}
                required
                className={styles.inputNumber}
                style={{ width: '60px' }}
              />
            </div>
          ))}
          <button type="submit" className={styles.btn}>Show Chart</button>
        </form>
      ) : (
        <canvas ref={chartRef} width={400} height={200}></canvas>
      )}
    </div>
  );
}