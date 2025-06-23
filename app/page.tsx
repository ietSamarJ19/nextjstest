import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import WelcomeAboutSection from '@/components/Welcome';
import RecruitersSection from '@/components/RecruitersSection';
import AcademicPrograms from '@/components/AcademicPrograms';
import Footer from '@/components/Footer';

export default function HomePage() {
  

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroCarousel/>
      <WelcomeAboutSection/>
      <RecruitersSection/>
      <AcademicPrograms/>
      <Footer/>
    </div>
  );
}
