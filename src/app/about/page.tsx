'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "JACK &rsquo;CHAINSAW&rsquo; REYNOLDS",
      role: "FOUNDER & CEO",
      bio: "Former wildland firefighter turned digital entrepreneur. Expert in tree services, fire mitigation, and cutting-edge technology integration.",
      image: "👨‍💼",
      specialties: ["Tree Services", "Fire Mitigation", "Leadership"],
      color: "neon-green"
    },
    {
      name: "SARAH &rsquo;CODE&rsquo; CHEN",
      role: "TECH DIRECTOR",
      bio: "Full-stack developer and 3D modeling specialist. Bridges the gap between traditional services and digital innovation.",
      image: "👩‍💻",
      specialties: ["Web Development", "3D Modeling", "VR Mapping"],
      color: "neon-cyan"
    },
    {
      name: "MIKE &rsquo;STONE&rsquo; RODRIGUEZ",
      role: "CONSTRUCTION LEAD",
      bio: "Master craftsman with 20 years experience in construction, stonework, and artistic installations.",
      image: "👷‍♂️",
      specialties: ["Rockwalls", "Tile Work", "Custom Construction"],
      color: "neon-yellow"
    },
    {
      name: "LUNA &rsquo;ZEN&rsquo; BLACKWOOD",
      role: "LANDSCAPE DESIGNER",
      bio: "Permaculture expert and zen garden specialist. Creates harmonious spaces that blend technology with nature.",
      image: "🧘‍♀️",
      specialties: ["Permaculture", "Zen Landscaping", "Land Planning"],
      color: "neon-pink"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-green-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4">
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
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="cyber-button text-sm">HOME</Link>
            <button className="cyber-button text-sm">SERVICES</button>
            <button className="cyber-button text-sm border-pink-500 text-pink-500">ABOUT</button>
            <button className="cyber-button text-sm">CONTACT</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="orbitron text-5xl md:text-7xl font-black neon-text glitch mb-8">
            ABOUT THE CREW
          </h1>
          <p className="text-xl md:text-2xl neon-yellow max-w-4xl mx-auto">
            We&rsquo;re not just service providers - we&rsquo;re digital pioneers bridging the gap between traditional craftsmanship and futuristic innovation.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center space-x-4 mb-12">
            {['mission', 'story', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cyber-button ${activeTab === tab ? 'bg-green-500 text-black' : ''}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mission Tab */}
          {activeTab === 'mission' && (
            <div className="terminal-style p-8 fade-in">
              <h2 className="orbitron text-3xl font-bold neon-cyan mb-8 text-center">
                OUR MISSION
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="service-card">
                    <h3 className="orbitron text-xl font-bold neon-green mb-4">INNOVATION</h3>
                    <p className="text-gray-300">
                      We combine traditional skills with cutting-edge technology to deliver services that exceed expectations. 
                      From VR property mapping to AI-assisted project planning, we&rsquo;re always pushing boundaries.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="orbitron text-xl font-bold neon-pink mb-4">EXCELLENCE</h3>
                    <p className="text-gray-300">
                      Every project is executed with precision and attention to detail. Whether it&rsquo;s a simple chainsaw sharpening 
                      or a complex permaculture installation, we deliver legendary results.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="service-card">
                    <h3 className="orbitron text-xl font-bold neon-yellow mb-4">SUSTAINABILITY</h3>
                    <p className="text-gray-300">
                      Our services are designed with environmental consciousness. From fire mitigation to permaculture design, 
                      we create solutions that protect and enhance the natural world.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="orbitron text-xl font-bold neon-cyan mb-4">ACCESSIBILITY</h3>
                    <p className="text-gray-300">
                      We believe quality services should be accessible to everyone. Our online quote system, video consultations, 
                      and flexible scheduling make it easy to get the help you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="terminal-style p-8 fade-in">
              <h2 className="orbitron text-3xl font-bold neon-yellow mb-8 text-center">
                OUR STORY
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔥</div>
                  <h3 className="orbitron text-2xl font-bold neon-green mb-4">FORGED IN FIRE</h3>
                  <p className="text-gray-300 text-lg">
                    Our founder started as a wildland firefighter, battling blazes across the American West. 
                    This experience taught him the value of preparation, quick thinking, and reliable execution under pressure.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="orbitron text-2xl font-bold neon-cyan mb-4">DIGITAL EVOLUTION</h3>
                  <p className="text-gray-300 text-lg">
                    Recognizing the need for innovation in traditional services, we began integrating technology into our operations. 
                    3D modeling, VR visualization, and online project management became part of our DNA.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="orbitron text-2xl font-bold neon-pink mb-4">LEGENDARY STATUS</h3>
                  <p className="text-gray-300 text-lg">
                    Today, we&rsquo;re the go-to crew for projects that others won&rsquo;t touch. From emergency tree removal to cutting-edge 
                                          landscape mapping, we&rsquo;ve built a reputation for delivering the impossible with style.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="fade-in">
              <h2 className="orbitron text-3xl font-bold text-center mb-12 neon-pink">
                MEET THE CREW
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="service-card">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{member.image}</div>
                      <h3 className={`orbitron text-xl font-bold mb-2 ${member.color}`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm uppercase tracking-wider ${member.color}`}>
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-center">
                      {member.bio}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="orbitron font-bold neon-text text-sm">SPECIALTIES:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span 
                            key={idx} 
                            className={`px-3 py-1 text-xs border ${member.color} border-current rounded-none`}
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
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="orbitron text-3xl font-bold text-center mb-16 neon-text">
            BY THE NUMBERS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="orbitron text-4xl font-black neon-green mb-2">500+</div>
              <div className="text-sm text-gray-400">PROJECTS COMPLETED</div>
            </div>
            <div className="text-center">
              <div className="orbitron text-4xl font-black neon-cyan mb-2">24/7</div>
              <div className="text-sm text-gray-400">EMERGENCY RESPONSE</div>
            </div>
            <div className="text-center">
              <div className="orbitron text-4xl font-black neon-yellow mb-2">19</div>
              <div className="text-sm text-gray-400">DIFFERENT SERVICES</div>
            </div>
            <div className="text-center">
              <div className="orbitron text-4xl font-black neon-pink mb-2">100%</div>
              <div className="text-sm text-gray-400">SATISFACTION RATE</div>
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