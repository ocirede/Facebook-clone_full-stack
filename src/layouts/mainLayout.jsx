import React from 'react';
import Navigation from '../components/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();
  const isSignin = location.pathname === '/signin';
console.log(location.pathname)
console.log(isSignin)
  return (
    <>
      {!isSignin && <Navigation />}
      
      <Routes>
        <Route path="/*" />
      </Routes>
    </>
  );
}
