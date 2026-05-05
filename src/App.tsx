/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedMenu } from './components/FeaturedMenu';
import { Cocktails } from './components/Cocktails';
import { Ambience } from './components/Ambience';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#060606]">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Cocktails />
      <Ambience />
      <Reservation />
      <Footer />
    </main>
  );
}
