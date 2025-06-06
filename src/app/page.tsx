'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentService, setCurrentService] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const services = [
    {
      title: "TREE SERVICE & STUMP GRINDING",
      description: "Professional tree removal, pruning, and stump grinding. No job is too big or small. Upload a video walkthrough for instant online quotes.",
      icon: "🌲",
      color: "neon-green"
    },
    {
      title: "WEB & APP DEVELOPMENT",
      description: "Custom websites, mobile apps, 3D models, and 3D printing services. From concept to deployment, we build the future.",
      icon: "💻",
      color: "neon-cyan"
    },
    {
      title: "CHAINSAW CHAIN SHARPENING",
      description: "Professional chainsaw maintenance and sharpening services. Keep your tools razor-sharp and ready for action.",
      icon: "⚡",
      color: "neon-yellow"
    },
    {
      title: "BATHROOM & KITCHEN TILE WORK",
      description: "Expert tile installation, repair, and restoration. Transform your space with precision craftsmanship.",
      icon: "🏠",
      color: "neon-pink"
    },
    {
      title: "GNOME STYLE ROCKWALLS",
      description: "Artistic stone wall construction with whimsical gnome-inspired designs. Functional art for your landscape.",
      icon: "🗿",
      color: "neon-green"
    },
    {
      title: "CHAINSAW CARVING",
      description: "Custom chainsaw sculptures and artistic woodworking. From bears to eagles, we carve your vision into reality.",
      icon: "🪓",
      color: "neon-cyan"
    },
    {
      title: "WOOD BURNING & CUSTOM SIGNS",
      description: "Pyrography art and custom signage. Personalized wooden signs for homes, businesses, and special occasions.",
      icon: "🔥",
      color: "neon-yellow"
    },
    {
      title: "BASIC MECHANICKING",
      description: "Tractor repair, equipment maintenance, and mechanical services. Keeping your machinery running smooth.",
      icon: "🔧",
      color: "neon-pink"
    },
    {
      title: "CATTLE BRANDING & ROUNDUP",
      description: "Professional livestock handling, branding, and roundup services. Experience with large-scale operations.",
      icon: "🐄",
      color: "neon-green"
    },
    {
      title: "FENCING",
      description: "Farm fencing, residential fencing, and boundary marking. Secure your property with quality installation.",
      icon: "🚧",
      color: "neon-cyan"
    },
    {
      title: "FIRE HAZARD MITIGATION",
      description: "Wildland firefighter expertise applied to property protection. Defensible space creation and fire prevention.",
      icon: "🔥",
      color: "neon-yellow"
    },
    {
      title: "ZEN LANDSCAPING",
      description: "Peaceful landscape design focusing on harmony and natural beauty. Create your personal sanctuary.",
      icon: "🧘",
      color: "neon-pink"
    },
    {
      title: "LANDSCAPE NERF SCANS",
      description: "3D mapping and VR visualization for estate planning. Advanced scanning technology for property development.",
      icon: "🎯",
      color: "neon-green"
    },
    {
      title: "PERMACULTURE SERVICES",
      description: "Large-scale permaculture design and hugelkultur implementation. Sustainable land management solutions.",
      icon: "🌱",
      color: "neon-cyan"
    },
    {
      title: "LAND CLEARING",
      description: "Professional land clearing and brush removal. Prepare your property for development or agriculture.",
      icon: "🚜",
      color: "neon-yellow"
    },
    {
      title: "CUSTOM ART & CONSTRUCTION",
      description: "Bespoke artistic installations and custom construction projects. From concept to completion.",
      icon: "🎨",
      color: "neon-pink"
    },
    {
      title: "YAKISUGI WOOD PREPARATION",
      description: "Traditional Japanese charred wood technique (Shou Sugi Ban). Natural wood preservation and stunning aesthetics.",
      icon: "🔥",
      color: "neon-green"
    },
    {
      title: "DRYWALL REPAIR",
      description: "Professional drywall installation, repair, and texturing. Orange peel, knockdown, and custom finishes.",
      icon: "🧱",
      color: "neon-cyan"
    },
    {
      title: "EMERGENCY SERVICES",
      description: "Last-minute furniture moving, deep cleaning, pressure washing, and emergency cleanup services.",
      icon: "🚨",
      color: "neon-yellow"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('services-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Image 
              src="/legendary-hustlers-logo.png" 
              alt="Legendary Hustlers Crew" 
              width={150}
              height={48}
              className="h-8 md:h-12 w-auto"
            />
            <div className="orbitron text-sm md:text-xl font-bold neon-text hidden sm:block">
              LEGENDARY HUSTLERS CREW
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button className="cyber-button text-sm border-pink-500 text-pink-500">HOME</button>
            <div className="relative" id="services-dropdown">
              <button 
                className="cyber-button text-sm"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                SERVICES ▼
              </button>
              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-80 terminal-style p-4 z-50">
                  <div className="space-y-2">
                    {services.slice(0, 8).map((service, index) => (
                      <div 
                        key={index} 
                        className="text-xs hover:text-pink-500 cursor-pointer"
                        onClick={() => {
                          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                          setShowDropdown(false);
                        }}
                      >
                        {service.icon} {service.title}
                      </div>
                    ))}
                    <div className="text-xs text-gray-400">...and more</div>
                    <a 
                      href="#services" 
                      className="block text-xs hover:text-cyan-500 cursor-pointer mt-2 pt-2 border-t border-green-500"
                      onClick={() => setShowDropdown(false)}
                    >
                      🎯 VIEW ALL SERVICES
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="/about" className="cyber-button text-sm">ABOUT</a>
            <a href="/contact" className="cyber-button text-sm">CONTACT</a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button 
              className="cyber-button text-sm px-3 py-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              ☰ MENU
            </button>
            {showDropdown && (
              <div className="absolute top-full right-4 left-4 mt-2 terminal-style p-4 z-50">
                <div className="space-y-3">
                  <button className="block w-full text-left cyber-button text-sm border-pink-500 text-pink-500">HOME</button>
                  <a 
                    href="#services" 
                    className="block w-full text-left cyber-button text-sm"
                    onClick={() => setShowDropdown(false)}
                  >
                    SERVICES
                  </a>
                  <a 
                    href="/about" 
                    className="block w-full text-left cyber-button text-sm"
                    onClick={() => setShowDropdown(false)}
                  >
                    ABOUT
                  </a>
                  <a 
                    href="/contact" 
                    className="block w-full text-left cyber-button text-sm"
                    onClick={() => setShowDropdown(false)}
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

              {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32 lg:pt-40 pb-16">
          <div className="text-center space-y-6 md:space-y-8 max-w-6xl mx-auto px-4">
          {/* Logo and Company Name */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-center">
              <Image 
                src="/legendary-hustlers-logo.png" 
                alt="Legendary Hustlers Crew" 
                width={400}
                height={200}
                className="h-32 md:h-40 lg:h-48 xl:h-56 w-auto"
                priority
              />
            </div>
            <div className="orbitron text-xl md:text-2xl lg:text-4xl xl:text-5xl font-black neon-text">
              LEGENDARY HUSTLERS CREW
            </div>
          </div>

          {/* Homescreen GIF */}
          <div className="flex justify-center mt-6 md:mt-8">
            <div className="relative">
              <Image 
                src="/homescreen.gif" 
                alt="Legendary Hustlers in Action" 
                width={400}
                height={280}
                className="w-80 md:w-96 lg:w-full max-w-md rounded-lg border-2 border-green-500 shadow-2xl"
                unoptimized
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-pink-500 to-cyan-500 rounded-lg blur opacity-20"></div>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-3 md:space-y-4 mt-8 md:mt-12">
            <h1 className="orbitron text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gradient">
              CYBERPUNK SERVICES
            </h1>
            <h2 className="orbitron text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold neon-cyan">
              FOR THE DIGITAL AGE
            </h2>
          </div>
          
          {/* Description and Actions */}
          <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
            <p className="text-base md:text-lg lg:text-xl neon-yellow max-w-4xl mx-auto px-4">
              From ancient crafts to quantum-age solutions. We bridge traditional expertise with futuristic innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
              <a href="/contact" className="cyber-button text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-center">GET QUOTE</a>
              <a href="#services" className="cyber-button border-pink-500 text-pink-500 hover:bg-pink-500 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-center">
                VIEW SERVICES
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Service Preview - Hidden on mobile for better UX */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden xl:block">
          <div className="service-card w-96 text-center fade-in">
            <div className={`text-4xl mb-4 ${services[currentService].color}`}>
              {services[currentService].icon}
            </div>
            <h3 className={`orbitron text-lg font-bold mb-2 ${services[currentService].color}`}>
              {services[currentService].title}
            </h3>
            <p className="text-sm text-gray-300">
              {services[currentService].description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="orbitron text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 neon-cyan">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in">
                <div className={`text-2xl md:text-3xl mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className={`orbitron text-base md:text-lg font-bold mb-3 md:mb-4 ${service.color}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a href="/contact" className="cyber-button text-xs w-full text-center block">GET QUOTE</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="orbitron text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 neon-yellow">
            GET YOUR QUOTE
          </h2>
          <div className="terminal-style p-6 md:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    NAME
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  SERVICE TYPE
                </label>
                <select className="w-full bg-black border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none">
                  <option>Select a service...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  PROJECT DESCRIPTION
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                  placeholder="Describe your project in detail..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  VIDEO WALKTHROUGH (Optional)
                </label>
                <input 
                  type="file" 
                  accept="video/*"
                  className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-2">
                  Upload a video for more accurate quotes (especially for tree services)
                </p>
              </div>
              
              <div className="text-center">
                <a href="/contact" className="cyber-button text-lg px-8 py-4 inline-block">
                  OPEN FULL CONTACT FORM
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-green-500/30 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="orbitron text-xl font-bold neon-text mb-4">
            LEGENDARY HUSTLERS CREW
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Cyberpunk services for the modern world. We blend traditional craftsmanship with futuristic innovation. 
            No job too big, no challenge too complex, no vision too ambitious.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
            <div className="neon-green">
              📧 EMAIL: hustlers@legendary.crew
            </div>
            <div className="neon-pink">
              📞 PHONE: (555) HUSTLE-NOW
            </div>
            <div className="neon-yellow">
              🚨 24/7 EMERGENCY SERVICES
            </div>
          </div>
          <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
            © 2024 Legendary Hustlers Crew. All rights reserved. Cyberpunk services since 2024.
          </div>
        </div>
      </footer>
    </div>
  );
}
