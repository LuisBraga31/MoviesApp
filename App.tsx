import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Routes } from './src/routes';
import { MovieProvider } from './src/contexts/MovieContext';

export default function App() {
  return (
    <>
      <MovieProvider>
        <Routes/>
        <StatusBar style="auto" />
      </MovieProvider>
    </>
  );
}


