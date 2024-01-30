import React from 'react';
import Navigation from '../components/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUserContext } from '../context/User-context';
export default function MainLayout() {
  const location = useLocation();
  const isSignin = location.pathname === '/signin';
  const { user } = useUserContext();
console.log(location.pathname)
console.log(isSignin)
  return (
    <>
      {!isSignin && user && <Navigation />}
      
      <Routes>
        <Route path="/*" />
      </Routes>
    </>
  );
}
