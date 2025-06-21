import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';

export default function HomePage() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCarousel/>
    </div>
  );
}
