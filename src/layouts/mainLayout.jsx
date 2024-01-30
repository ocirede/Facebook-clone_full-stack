import React from 'react';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import { useUserContext } from '../context/User-context';
export default function MainLayout() {
  
  return (
    <>
     <Outlet />
    </>
  );
}
