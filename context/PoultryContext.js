'use client';

import React, { createContext, useState, useContext } from 'react';

const PoultryContext = createContext(null);

export function PoultryProvider({ children }) {
  const [birds, setBirds] = useState('');
  const [eggs, setEggs] = useState('');
  const [feed, setFeed] = useState('');

  return (
    <PoultryContext.Provider value={{ birds, setBirds, eggs, setEggs, feed, setFeed }}>
      {children}
    </PoultryContext.Provider>
  );
}

export function usePoultry() {
  const context = useContext(PoultryContext);
  if (!context) {
    throw new Error('usePoultry must be used within a PoultryProvider');
  }
  return context;
}