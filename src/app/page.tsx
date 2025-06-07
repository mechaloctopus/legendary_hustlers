'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LegendaryBot from './components/LegendaryBot';

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const primaryServices = [
    {
      title: "TREE REMOVAL & TRIMMING",
      description: "Professional tree removal, pruning, and health assessment. From hazardous tree removal to artistic pruning.",
      icon: "🌲",
      features: ["Emergency tree removal", "Crown reduction", "Tree health assessment", "Stump grinding"]
    },
    {
      title: "FIRE HAZARD MITIGATION",
      description: "Defensible space creation and fire risk reduction services to protect your property.",
      icon: "🔥",
      features: ["Brush clearing", "Defensible space zones", "Fire-resistant landscaping", "Emergency clearing"]
    },
    {
      title: "STUMP GRINDING",
      description: "Complete stump removal with professional grinding equipment. Clean up included.",
      icon: "⚙️",
      features: ["Complete stump removal", "Root grinding", "Site cleanup", "Mulch production"]
    },
    {
      title: "ZEN LANDSCAPING",
      description: "Artistic landscape design combining natural beauty with modern aesthetics.",
      icon: "🏞️",
      features: ["Garden design", "Native plant installation", "Water features", "Meditation spaces"]
    },
    {
      title: "LANDSCAPE NERF SCANNING",
      description: "Advanced 3D terrain mapping and analysis for optimal landscape planning.",
      icon: "📡",
      features: ["3D terrain mapping", "Drainage analysis", "Soil assessment", "Project visualization"]
    },
    {
      title: "LAND CLEARING",
      description: "Complete land preparation for construction, agriculture, or development projects.",
      icon: "🚜",
      features: ["Brush clearing", "Lot preparation", "Access road creation", "Debris removal"]
    },
    {
      title: "EMERGENCY SERVICES",
      description: "24/7 emergency response for storm damage, fallen trees, and urgent tree hazards.",
      icon: "🚨",
      features: ["24/7 response", "Storm damage cleanup", "Insurance coordination", "Safety assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image 
                src="/legendary-hustlers-logo.png" 
                alt="Legendary Hustlers Logo" 
                width={40} 
                height={40}
                className="h-8 w-auto md:h-12"
              />
              <span className="terminal-text font-bold text-lg hidden sm:block">LEGENDARY HUSTLERS CREW</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="terminal-text hover:terminal-text-orange transition-colors">HOME</Link>
              <Link href="/about" className="terminal-text hover:terminal-text-orange transition-colors">ABOUT</Link>
              <Link href="/contact" className="terminal-text hover:terminal-text-orange transition-colors">CONTACT</Link>
              <Link href="/services" className="terminal-text hover:terminal-text-orange transition-colors">ALL SERVICES</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden terminal-text text-xl font-bold"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              ☰ MENU
            </button>
          </div>

          {/* Mobile Dropdown */}
          {showDropdown && (
            <div className="md:hidden bg-black/95 border-t border-terminal-green">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">HOME</Link>
                <Link href="/about" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">ABOUT</Link>
                <Link href="/contact" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">CONTACT</Link>
                <Link href="/services" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">ALL SERVICES</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8">
            <Image 
              src="/legendary-hustlers-logo.png" 
              alt="Legendary Hustlers Logo" 
              width={400} 
              height={200}
              className="mx-auto h-32 md:h-40 lg:h-48 xl:h-56 w-auto"
            />
            
            <div className="space-y-4">
              <h1 className="pixel-text text-lg md:text-xl lg:text-2xl xl:text-3xl">
                LEGENDARY HUSTLERS CREW
              </h1>
              
              <h2 className="terminal-text-orange text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-relaxed">
                TREE WORK AND HANDY MAN CREW SERVICES
              </h2>
              
              <p className="terminal-text text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                From ancient tree wisdom to modern landscape solutions. We bridge traditional expertise with innovative techniques for complete property management.
              </p>
            </div>
            
            <Image 
              src="/homescreen.gif" 
              alt="Legendary Hustlers" 
              width={300} 
              height={200}
              className="mx-auto rounded-lg cyber-border"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="cyber-button w-full sm:w-auto text-center">
                GET QUOTE
              </Link>
              <Link href="/about" className="cyber-button w-full sm:w-auto text-center">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            PRIMARY SERVICES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {primaryServices.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="text-center space-y-4">
                  <div className="text-2xl md:text-3xl mb-4">{service.icon}</div>
                  <h3 className="terminal-text-orange text-sm md:text-base font-bold">
                    {service.title}
                  </h3>
                  <p className="terminal-text text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="terminal-text text-xs md:text-sm flex items-center justify-center">
                        <span className="terminal-text-orange mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="pixel-text text-lg md:text-xl lg:text-2xl">
            ADDITIONAL SERVICES
          </h2>
          <p className="terminal-text text-base md:text-lg leading-relaxed">
            We also offer specialized services including web development, app design, 
            marketing solutions, and more through our network of skilled partners.
          </p>
          <Link href="/services" className="cyber-button inline-block">
            VIEW ALL SERVICES
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="pixel-text text-lg md:text-xl lg:text-2xl">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="terminal-text text-base md:text-lg leading-relaxed">
            Contact us for a free consultation and quote. Available 24/7 for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button w-full sm:w-auto text-center">
              GET FREE QUOTE
            </Link>
            <a href="tel:+1234567890" className="cyber-button w-full sm:w-auto text-center">
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      <LegendaryBot />
    </div>
  );
}
