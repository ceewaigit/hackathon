'use client';
import BentoGrid from '../components/BentoGrid.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Prizes from '../components/Prizes.js';
import Sponsors from '../components/Sponsors.js';
import FAQ from '../components/FAQ.js';
import Judges from '../components/Judges.js';
import Menu from '../components/Menu.js';

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <main className="flex flex-col gap-5 mt-20">
        <BentoGrid />
        <Prizes />
        <FAQ />
        <Sponsors />
        <Judges />
      </main>
      <Footer />
    </div>
  );
}
