'use client';
import BentoGrid from '../components/BentoGrid.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Prizes from '../components/Prizes.js';
import Sponsors from '../components/Sponsors.js';
import FAQ from '../components/FAQ.js';
import Judges from '../components/Judges.js';
import Menu from '../components/Menu.js';
import HackathonTimeline from '../components/HackathonTimeline.js';
import Participants from '../components/Participants.js';

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <BentoGrid />
      <Prizes />
      <FAQ />
      <HackathonTimeline />
      <Sponsors />
      <Judges />
      <Participants />
      <Footer />
    </div>
  );
}
