import React from 'react';
import { Navbar, Sidebar } from '../../components';

export const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height: "7.5vh"}}>
        <Navbar />
      </div>
      <div className="flex" style={{height: "92.5vh"}}>
        <Sidebar />
      </div>
    </div>
  )
}