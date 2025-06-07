'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LegendaryBot from '../components/LegendaryBot';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [showDropdown, setShowDropdown] = useState(false);

  const teamMembers = [
    {
      name: "JACK 'CHAINSAW' REYNOLDS",
      role: "LEAD ARBORIST & FOUNDER",
      image: "🌲",
      color: "terminal-text-orange",
      bio: "Former wildland firefighter turned master arborist. 15+ years of experience in dangerous tree removal and fire prevention.",
      specialties: ["Emergency Tree Removal", "Fire Hazard Assessment", "Climbing Techniques", "Safety Protocols"]
    },
    {
      name: "SARAH 'ROOTS' MARTINEZ",
      role: "LANDSCAPE ARCHITECT",
      image: "🌿", 
      color: "terminal-text",
      bio: "Permaculture expert with a passion for zen landscape design. Creates harmony between natural beauty and practical function.",
      specialties: ["Zen Landscaping", "Permaculture Design", "Native Plants", "Sustainable Systems"]
    },
    {
      name: "MIKE 'STUMP' JOHNSON",
      role: "HEAVY EQUIPMENT OPERATOR",
      image: "⚙️",
      color: "terminal-text-orange",
      bio: "Master of the grinder. No stump too big, no job too complex. Precision equipment operation with artistic attention to detail.",
      specialties: ["Stump Grinding", "Land Clearing", "Equipment Repair", "Site Preparation"]
    },
    {
      name: "ALEX 'SCANNER' CHEN",
      role: "TECHNOLOGY SPECIALIST",
      image: "📡",
      color: "terminal-text",
      bio: "Brings cutting-edge 3D mapping and digital solutions to traditional tree services. Makes the complex simple.",
      specialties: ["3D Terrain Mapping", "Project Visualization", "Digital Planning", "Technical Innovation"]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm cyber-border">
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
              <Link href="/about" className="terminal-text-orange transition-colors">ABOUT</Link>
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
                <Link href="/about" className="terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">ABOUT</Link>
                <Link href="/contact" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">CONTACT</Link>
                <Link href="/services" className="terminal-text hover:terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">ALL SERVICES</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="pixel-text text-lg md:text-xl lg:text-2xl xl:text-3xl">
              ABOUT LEGENDARY HUSTLERS CREW
            </h1>
            
            <h2 className="terminal-text-orange text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-relaxed">
              TREE CARE EXPERTS WITH DIVERSE SKILLS
            </h2>
            
            <p className="terminal-text text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              We&rsquo;re a specialized tree service crew with roots in traditional craftsmanship and branches reaching into modern solutions. 
              Our core expertise is in professional tree care, but our diverse skill set allows us to tackle any property challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
            {['mission', 'story', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cyber-button w-full sm:w-auto px-6 py-3 ${activeTab === tab ? 'bg-terminal-green text-black' : ''}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mission Tab */}
          {activeTab === 'mission' && (
            <div className="terminal-style p-8 fade-in">
              <h2 className="pixel-text text-xl md:text-2xl lg:text-3xl mb-8 text-center">
                OUR MISSION
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="service-card">
                    <h3 className="terminal-text-orange text-lg font-bold mb-4">TREE HEALTH & SAFETY</h3>
                    <p className="terminal-text text-sm leading-relaxed">
                      We prioritize the health and safety of your trees and property. Our expert assessments and precise techniques 
                      ensure every job is completed safely while preserving the natural beauty of your landscape.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="terminal-text-orange text-lg font-bold mb-4">FIRE PREVENTION</h3>
                    <p className="terminal-text text-sm leading-relaxed">
                      With wildfire risks increasing, we provide crucial defensible space creation and fire hazard mitigation. 
                      Our expertise protects your property and helps prevent catastrophic fire spread.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="service-card">
                    <h3 className="terminal-text-orange text-lg font-bold mb-4">SUSTAINABLE PRACTICES</h3>
                    <p className="terminal-text text-sm leading-relaxed">
                      Every service is designed with environmental consciousness. We recycle wood waste, use eco-friendly methods, 
                      and create solutions that enhance rather than harm the natural ecosystem.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="terminal-text-orange text-lg font-bold mb-4">EMERGENCY RESPONSE</h3>
                    <p className="terminal-text text-sm leading-relaxed">
                      When storms strike or trees fall, we&rsquo;re ready 24/7. Our rapid response team handles emergencies with 
                      the urgency and expertise your situation demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="terminal-style p-8 fade-in">
              <h2 className="pixel-text text-xl md:text-2xl lg:text-3xl mb-8 text-center">
                OUR STORY
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <h3 className="terminal-text-orange text-xl font-bold mb-4">FORGED IN FIRE</h3>
                  <p className="terminal-text leading-relaxed">
                    Our founder started as a wildland firefighter, battling blazes across the American West. 
                    This experience taught him the critical importance of fire prevention, quick decision-making, and reliable execution under pressure.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🌲</div>
                  <h3 className="terminal-text-orange text-xl font-bold mb-4">ROOTED IN EXPERTISE</h3>
                  <p className="terminal-text leading-relaxed">
                    Transitioning from fighting fires to preventing them, we developed expertise in tree health, proper removal techniques, 
                    and creating defensible spaces. Traditional arboriculture became our foundation.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">📡</div>
                  <h3 className="terminal-text-orange text-xl font-bold mb-4">MODERN INNOVATION</h3>
                  <p className="terminal-text leading-relaxed">
                    Recognizing the need for precision in complex projects, we integrated 3D mapping and visualization technology. 
                    This allows us to plan projects with unprecedented accuracy and show clients exactly what to expect.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="terminal-text-orange text-xl font-bold mb-4">LEGENDARY RESULTS</h3>
                  <p className="terminal-text leading-relaxed">
                    Today, we&rsquo;re the crew that others call when they face impossible tree situations. Emergency removals, 
                    complex rigging, hazardous climbs - we&rsquo;ve built our reputation on delivering safe, professional results every time.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="fade-in">
              <h2 className="pixel-text text-xl md:text-2xl lg:text-3xl text-center mb-12">
                MEET THE CREW
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="service-card">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{member.image}</div>
                      <h3 className={`terminal-text-orange text-lg font-bold mb-2`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm uppercase tracking-wider terminal-text`}>
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="terminal-text mb-6 text-center text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="terminal-text-orange font-bold text-sm">SPECIALTIES:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 text-xs border terminal-text border-terminal-green"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-text text-xl md:text-2xl lg:text-3xl text-center mb-12">
            OUR IMPACT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl terminal-text-orange font-bold mb-2">500+</div>
              <p className="terminal-text text-sm">Trees Safely Removed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl terminal-text-orange font-bold mb-2">24/7</div>
              <p className="terminal-text text-sm">Emergency Response</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl terminal-text-orange font-bold mb-2">15+</div>
              <p className="terminal-text text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl terminal-text-orange font-bold mb-2">100%</div>
              <p className="terminal-text text-sm">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="pixel-text text-lg md:text-xl lg:text-2xl">
            READY TO WORK WITH THE CREW?
          </h2>
          <p className="terminal-text text-base md:text-lg leading-relaxed">
            Whether you need emergency tree removal, routine maintenance, or a complete landscape transformation, 
            we bring the expertise and passion to get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button w-full sm:w-auto text-center">
              GET YOUR QUOTE
            </Link>
            <Link href="/" className="cyber-button w-full sm:w-auto text-center">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      <LegendaryBot />
    </div>
  );
} 