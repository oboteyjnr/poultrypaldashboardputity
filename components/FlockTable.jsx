'use client';

import { useState } from 'react';
import styles from '../styles/layout.module.css';

export default function FlockTable() {
  const [flock, setFlock] = useState([]);
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [count, setCount] = useState('');

  const addFlock = (e) => {
    e.preventDefault();
    if (type && age && count) {
      setFlock([
        ...flock,
        {
          id: flock.length + 1,
          type,
          age: Number(age),
          count: Number(count),
        },
      ]);
      setType('');
      setAge('');
      setCount('');
    }
  };

  return (
    <div className={styles.card}>
      <h3>Flock Table</h3>
      <form onSubmit={addFlock} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Type (e.g. Layer)"
          value={type}
          onChange={e => setType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age (weeks)"
          value={age}
          onChange={e => setAge(e.target.value)}
          min={0}
          required
        />
        <input
          type="number"
          placeholder="Count"
          value={count}
          onChange={e => setCount(e.target.value)}
          min={1}
          required
        />
        <button type="submit">Add Flock</button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Age (weeks)</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {flock.length === 0 ? (
            <tr><td colSpan={4} style={{ textAlign: 'center' }}>No flock records yet.</td></tr>
          ) : (
            flock.map(f => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.type}</td>
                <td>{f.age}</td>
                <td>{f.count}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}