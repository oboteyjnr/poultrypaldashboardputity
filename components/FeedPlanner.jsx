'use client';

import { useState } from 'react';
import styles from '../styles/layout.module.css';

export default function FeedPlanner() {
  const [initialFeed, setInitialFeed] = useState('');
  const [feedSet, setFeedSet] = useState(false);
  const [plan, setPlan] = useState('');
  const [plans, setPlans] = useState([]);

  const handleSetFeed = (e) => {
    e.preventDefault();
    if (initialFeed && Number(initialFeed) > 0) {
      setFeedSet(true);
    }
  };

  const addPlan = () => {
    if (plan.trim()) {
      setPlans([...plans, plan]);
      setPlan('');
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.sectionHeader}>Your Title Here</h2>
      <h3>Feed Planner</h3>
      {!feedSet ? (
        <form className={styles.form} onSubmit={handleSetFeed} style={{ marginBottom: '1rem', gap: '0.5rem' }}>
          <input
            type="number"
            value={initialFeed}
            onChange={e => setInitialFeed(e.target.value)}
            placeholder="Set initial feed (kg)"
            min={1}
            required
            className={styles.inputNumber}
          />
          <button type="submit" className={styles.btn}>Set Feed</button>
        </form>
      ) : (
        <p>Feed available: {initialFeed} kg</p>
      )}
      <input
        type="text"
        value={plan}
        onChange={e => setPlan(e.target.value)}
        placeholder="Enter feed plan..."
        disabled={!feedSet}
        className={styles.input}
      />
      <button onClick={addPlan} disabled={!feedSet} className={styles.btn}>Add Plan</button>
      <ul>
        {plans.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}