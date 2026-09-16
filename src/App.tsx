/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { BudgetCalculator } from './components/BudgetCalculator';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D0F12] text-[#EDEFF3] font-sans antialiased selection:bg-[#5B6EF5] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <BudgetCalculator />
        <Pricing />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
