'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: 'normal',
    description: '',
    location: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Tree Service & Stump Grinding",
    "Web & App Development", 
    "Chainsaw Chain Sharpening",
    "Bathroom & Kitchen Tile Work",
    "Gnome Style Rockwalls",
    "Chainsaw Carving",
    "Wood Burning & Custom Signs",
    "Basic Mechanicking",
    "Cattle Branding & Roundup",
    "Fencing",
    "Fire Hazard Mitigation",
    "Zen Landscaping",
    "Landscape NerfScans",
    "Permaculture Services",
    "Land Clearing",
    "Custom Art & Construction",
    "Yakisugi Wood Preparation",
    "Drywall Repair",
    "Emergency Services"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black relative scanlines flex items-center justify-center">
        <div className="cyberpunk-grid"></div>
        <div className="text-center terminal-style p-12 max-w-2xl mx-4">
          <div className="text-6xl mb-8">✅</div>
          <h1 className="orbitron text-4xl font-bold neon-green mb-6">
            TRANSMISSION RECEIVED
          </h1>
          <p className="text-xl neon-cyan mb-6">
            Your request has been uploaded to our cybersystem. 
            A crew member will contact you within 24 hours.
          </p>
          <div className="space-y-4 text-left">
            <div className="flex justify-between">
              <span className="neon-yellow">REQUEST ID:</span>
              <span className="neon-pink">LHC-{Date.now().toString().slice(-6)}</span>
            </div>
            <div className="flex justify-between">
              <span className="neon-yellow">SERVICE:</span>
              <span className="neon-pink">{formData.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="neon-yellow">PRIORITY:</span>
              <span className={`${formData.urgency === 'emergency' ? 'neon-pink' : 'neon-green'}`}>
                {formData.urgency.toUpperCase()}
              </span>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="cyber-button mt-8"
          >
            RETURN TO BASE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-4">
            <Image 
              src="/legendary-hustlers-logo.png" 
              alt="Legendary Hustlers Crew" 
              width={150}
              height={48}
              className="h-12 w-auto spinning-logo"
            />
            <div className="orbitron text-xl font-bold neon-text hidden lg:block">
              LEGENDARY HUSTLERS CREW
            </div>
          </a>
          <div className="flex space-x-6">
            <a href="/" className="cyber-button text-sm">HOME</a>
            <button className="cyber-button text-sm">SERVICES</button>
            <a href="/about" className="cyber-button text-sm">ABOUT</a>
            <button className="cyber-button text-sm border-pink-500 text-pink-500">CONTACT</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="orbitron text-5xl md:text-7xl font-black neon-text glitch mb-8">
            ESTABLISH CONNECTION
          </h1>
          <p className="text-xl md:text-2xl neon-yellow max-w-4xl mx-auto">
            Ready to initiate your project? Connect with our crew through multiple channels. 
            For tree services, upload a video walkthrough for instant quote calculations.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="service-card text-center">
              <div className="text-4xl mb-4 neon-green">📞</div>
              <h3 className="orbitron text-xl font-bold neon-green mb-4">VOICE COMM</h3>
              <p className="text-gray-300 mb-4">Direct line for immediate assistance</p>
              <p className="neon-pink text-lg font-bold">(555) HUSTLE-NOW</p>
              <p className="text-sm text-gray-400">24/7 Emergency Hotline</p>
            </div>
            
            <div className="service-card text-center">
              <div className="text-4xl mb-4 neon-cyan">📧</div>
              <h3 className="orbitron text-xl font-bold neon-cyan mb-4">DATA PACKET</h3>
              <p className="text-gray-300 mb-4">Send detailed project information</p>
              <p className="neon-pink text-lg font-bold">hustlers@legendary.crew</p>
              <p className="text-sm text-gray-400">Response within 4 hours</p>
            </div>
            
            <div className="service-card text-center">
              <div className="text-4xl mb-4 neon-yellow">🎯</div>
              <h3 className="orbitron text-xl font-bold neon-yellow mb-4">LIVE LOCATION</h3>
              <p className="text-gray-300 mb-4">Field operations headquarters</p>
              <p className="neon-pink text-lg font-bold">Matrix Industrial Zone</p>
              <p className="text-sm text-gray-400">Coordinates: 34.0522°N 118.2437°W</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="terminal-style p-8">
            <h2 className="orbitron text-3xl font-bold neon-cyan mb-8 text-center">
              PROJECT INITIALIZATION FORM
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    OPERATIVE NAME *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="Enter your designation..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    COMM FREQUENCY *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="operative@domain.net"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    VOICE CHANNEL
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    LOCATION COORDINATES
                  </label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                    placeholder="City, State or GPS coords"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  SERVICE MODULE *
                </label>
                <select 
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                  required
                >
                  <option value="">Select operational mode...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Priority and Contact Preference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    MISSION PRIORITY
                  </label>
                  <select 
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                  >
                    <option value="normal">Standard Operation</option>
                    <option value="urgent">High Priority</option>
                    <option value="emergency">EMERGENCY - Code Red</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 neon-text">
                    PREFERRED COMM METHOD
                  </label>
                  <select 
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                  >
                    <option value="email">Data Packet (Email)</option>
                    <option value="phone">Voice Channel (Phone)</option>
                    <option value="text">Text Transmission</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  MISSION BRIEFING *
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                  placeholder="Describe your project in detail. For tree services, include tree species, size, location, and any hazards..."
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-bold mb-2 neon-text">
                  VISUAL INTEL UPLOAD
                </label>
                <input 
                  type="file" 
                  accept="video/*,image/*"
                  className="w-full bg-transparent border border-green-500 p-3 text-green-500 focus:border-pink-500 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-2">
                  📹 Video walkthroughs recommended for tree services (max 100MB)
                  <br />
                  📸 Photos accepted for all other services
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`cyber-button text-lg px-12 py-4 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-green-500 hover:text-black'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">TRANSMITTING...</span>
                    </>
                  ) : (
                    'INITIATE MISSION'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="service-card border-red-500 hover:border-red-500">
            <div className="text-center">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="orbitron text-2xl font-bold text-red-500 mb-4">
                EMERGENCY PROTOCOLS
              </h3>
              <p className="text-gray-300 mb-6">
                For immediate assistance with emergencies (fallen trees, fire hazards, equipment failures), 
                bypass standard channels and contact our emergency response team directly.
              </p>
              <div className="space-y-2">
                <p className="text-red-500 font-bold text-xl">(555) EMERGENCY</p>
                <p className="text-sm text-gray-400">Available 24/7/365 - Response within 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-green-500/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="orbitron text-2xl font-bold neon-text mb-4">
            LEGENDARY HUSTLERS CREW
          </div>
          <p className="text-gray-400 mb-4">
            Cyberpunk services for the modern world. No job too big, no challenge too complex.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <span className="neon-green">EMAIL: hustlers@legendary.crew</span>
            <span className="neon-pink">PHONE: (555) HUSTLE-NOW</span>
            <span className="neon-yellow">24/7 EMERGENCY SERVICES</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 