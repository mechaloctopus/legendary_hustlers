'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function LegendaryBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const companyKnowledge = {
    services: [
      "Tree Service & Stump Grinding - Professional tree removal with video quote system",
      "Web & App Development - Custom digital solutions and 3D printing",
      "Chainsaw Chain Sharpening - Equipment maintenance services",
      "Bathroom & Kitchen Tile Work - Home improvement services",
      "Gnome Style Rockwalls - Artistic stonework",
      "Chainsaw Carving - Custom wood sculptures",
      "Wood Burning & Custom Signs - Pyrography and signage",
      "Basic Mechanicking - Tractor and equipment repair",
      "Cattle Branding & Roundup - Livestock services",
      "Fencing - Property boundary solutions",
      "Fire Hazard Mitigation - Wildland firefighter expertise",
      "Zen Landscaping - Peaceful garden design",
      "Landscape NerfScans - 3D property mapping and VR visualization",
      "Permaculture Services - Sustainable land management",
      "Land Clearing - Site preparation",
      "Custom Art & Construction - Bespoke installations",
      "Yakisugi Wood Preparation - Japanese charred wood technique",
      "Drywall Repair - Interior finishing",
      "Emergency Services - 24/7 urgent assistance"
    ],
    team: [
      "Jack 'Chainsaw' Reynolds - Founder & CEO, Former wildland firefighter",
      "Sarah 'Code' Chen - Tech Director, Full-stack developer and 3D modeling specialist",
      "Mike 'Stone' Rodriguez - Construction Lead, Master craftsman with 20 years experience",
      "Luna 'Zen' Blackwood - Landscape Designer, Permaculture expert and zen garden specialist"
    ],
    contact: {
      phone: "(555) HUSTLE-NOW",
      email: "hustlers@legendary.crew",
      emergency: "(555) EMERGENCY"
    }
  };

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting = {
          role: 'assistant' as const,
          content: `LEGENDARY HUSTLERS CREW - TERMINAL v2.77.4
SYSTEM INITIALIZED...
NEURAL NETWORK ONLINE...
CYBERNETIC INTERFACE ACTIVATED...

> GREETINGS, OPERATIVE. I AM THE LEGENDARY HUSTLER BOT.
> I'VE BEEN PROGRAMMED WITH EXTENSIVE KNOWLEDGE OF OUR OPERATIONS.
> ASK ME ABOUT OUR SERVICES, TEAM, OR HOW TO NAVIGATE THIS SYSTEM.
> TYPE 'HELP' FOR AVAILABLE COMMANDS.

AWAITING INPUT...`,
          timestamp: new Date()
        };
        setMessages([greeting]);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  const generateResponse = async (userInput: string): Promise<string> => {
    const input = userInput.toLowerCase();
    
    // Command responses
    if (input === 'help') {
      return `AVAILABLE COMMANDS:
> SERVICES - List all available services
> TEAM - Meet our crew members
> CONTACT - Get contact information
> QUOTE - How to get a project quote
> EMERGENCY - Emergency contact protocols
> NAVIGATE - Site navigation help
> CLEAR - Clear terminal history

Or just ask me anything about Legendary Hustlers Crew!`;
    }

    if (input === 'services') {
      return `LEGENDARY HUSTLERS CREW - SERVICE MODULES:

${companyKnowledge.services.map((service, i) => `${String(i + 1).padStart(2, '0')}. ${service}`).join('\n')}

> FOR DETAILED QUOTES, USE OUR CONTACT FORM WITH VIDEO UPLOAD
> EMERGENCY SERVICES AVAILABLE 24/7/365`;
    }

    if (input === 'team') {
      return `LEGENDARY CREW MEMBERS - CLASSIFIED PROFILES:

${companyKnowledge.team.map((member, i) => `${String(i + 1).padStart(2, '0')}. ${member}`).join('\n')}

> EACH OPERATIVE SPECIALIZES IN MULTIPLE DISCIPLINES
> COMBINED EXPERIENCE: 50+ YEARS IN THE FIELD`;
    }

    if (input === 'contact') {
      return `COMMUNICATION CHANNELS:

PRIMARY VOICE: ${companyKnowledge.contact.phone}
DATA PACKET: ${companyKnowledge.contact.email}  
EMERGENCY LINE: ${companyKnowledge.contact.emergency}

> 24/7 EMERGENCY RESPONSE AVAILABLE
> VIDEO QUOTES ACCEPTED FOR TREE SERVICES
> AVERAGE RESPONSE TIME: <4 HOURS`;
    }

    if (input === 'quote') {
      return `QUOTE REQUEST PROTOCOL:

1. NAVIGATE TO /CONTACT PAGE
2. SELECT SERVICE TYPE FROM DROPDOWN
3. PROVIDE DETAILED PROJECT DESCRIPTION
4. UPLOAD VIDEO WALKTHROUGH (RECOMMENDED FOR TREE SERVICES)
5. SUBMIT FORM FOR PROCESSING

> VIDEO QUOTES PROVIDE 90% MORE ACCURACY
> EMERGENCY QUOTES AVAILABLE WITHIN 30 MINUTES`;
    }

    if (input === 'emergency') {
      return `🚨 EMERGENCY PROTOCOLS ACTIVATED 🚨

IMMEDIATE RESPONSE LINE: ${companyKnowledge.contact.emergency}

EMERGENCY SERVICES INCLUDE:
- FALLEN TREE REMOVAL
- FIRE HAZARD MITIGATION  
- EQUIPMENT FAILURES
- URGENT PROPERTY DAMAGE

> RESPONSE TIME: <30 MINUTES
> AVAILABLE 24/7/365
> WILDLAND FIREFIGHTER ON STAFF`;
    }

    if (input === 'navigate') {
      return `SITE NAVIGATION MAP:

/ (HOME) - Main services overview and contact form
/ABOUT - Company mission, story, and team profiles  
/CONTACT - Detailed contact form with file upload

QUICK ACTIONS:
- Click service cards for detailed information
- Use dropdown menu for service navigation
- Contact form supports video upload for quotes

> ALL PAGES FEATURE CYBERPUNK AESTHETICS
> MOBILE-RESPONSIVE DESIGN ACTIVE`;
    }

    if (input === 'clear') {
      setMessages([]);
      return 'TERMINAL CLEARED. NEURAL PATHWAYS RESET.';
    }

    // Easter eggs and special commands
    if (input.includes('matrix') || input.includes('neo')) {
      return `🔴 MATRIX PROTOCOLS DETECTED 🔴

"There is no spoon... but there are chainsaws."

The Legendary Hustlers Crew operates in both the digital and physical realms. We're the bridge between what is and what could be.

RED PILL: Contact us for reality-bending services
BLUE PILL: Continue browsing like nothing happened

> CHOICE IS YOURS, OPERATIVE`;
    }

    if (input.includes('legendary') || input.includes('legend')) {
      return `⚡ LEGENDARY STATUS VERIFICATION ⚡

SCANNING... SCANNING... CONFIRMED.

You have invoked the sacred word. The Legendary Hustlers Crew didn't earn this title by chance. We're legendary because:

- We take on projects others fear to attempt
- Our founder battled wildfires for a living  
- We combine 50+ years of experience with bleeding-edge tech
- No job is too big, no challenge too complex
- We deliver the impossible, with style

STATUS: LEGENDARY ✓ VERIFIED ✓ ACTIVE ✓`;
    }

    if (input.includes('cyberpunk') || input.includes('future')) {
      return `🌆 CYBERPUNK PROTOCOLS ACKNOWLEDGED 🌆

Welcome to the future of service industries. We're not just inspired by cyberpunk aesthetics - we're living it.

NEON-LIT REALITY:
- Ancient skills meet quantum-age tools
- Traditional craftsmanship enhanced by AI
- Physical services augmented by VR/3D tech  
- Old-school reliability with new-world innovation

In our world, a tree surgeon uses drones for recon, a landscape designer creates VR walkthroughs, and a construction crew builds with both stone and silicon.

THE FUTURE IS NOW. WE ARE LEGENDARY.`;
    }

    // Advanced AI responses with context awareness
    if (input.includes('tree') || input.includes('stump')) {
      return `🌲 TREE SERVICE SPECIALIST PROTOCOL ACTIVATED 🌲

Our tree services are legendary. With our founder's wildland firefighting background, we handle dangerous removals others won't touch. Upload a video walkthrough via our contact form for instant AI-powered quote calculations.

SERVICES INCLUDE:
- Emergency fallen tree removal
- Professional pruning and trimming  
- Stump grinding and root removal
- Fire hazard tree mitigation
- Large-scale commercial projects

> VIDEO QUOTES: 90% more accurate than photos
> EMERGENCY RESPONSE: Available 24/7`;
    }

    if (input.includes('web') || input.includes('app') || input.includes('3d')) {
      return `💻 DIGITAL TECHNOLOGIES DIVISION ONLINE 💻

Our tech division bridges traditional services with cutting-edge innovation. Led by Sarah "Code" Chen, we create digital solutions that enhance physical world operations.

CAPABILITIES INCLUDE:
- Custom web applications and websites
- Mobile app development  
- 3D modeling and printing services
- VR property visualization
- NerfScan landscape mapping
- IoT integration for traditional services

> BETA SERVICE: Custom 3D printing available
> TECH STACK: Modern frameworks and tools`;
    }

    if (input.includes('emergency') || input.includes('urgent') || input.includes('help')) {
      return `🚨 EMERGENCY RESPONSE PROTOCOLS INITIATED 🚨

When disaster strikes, we respond with military precision. Our founder's wildland firefighting experience ensures rapid, professional emergency response.

IMMEDIATE RESPONSE SERVICES:
- Fallen tree removal blocking roads/structures
- Fire hazard mitigation 
- Equipment failure repairs
- Storm damage cleanup
- Emergency fence repairs

EMERGENCY HOTLINE: ${companyKnowledge.contact.emergency}
> Response time: Under 30 minutes
> Available 24/7/365`;
    }

    if (input.includes('landscape') || input.includes('zen') || input.includes('permaculture')) {
      return `🧘 ZEN LANDSCAPING & PERMACULTURE PROTOCOLS 🧘

Luna "Zen" Blackwood leads our sustainable landscape division, combining ancient wisdom with modern ecological science.

SPECIALIZED SERVICES:
- Zen garden design and installation
- Large-scale permaculture implementation
- Hugelkultur construction
- Sustainable land management
- Meditation space creation
- Native plant restoration

> PHILOSOPHY: Harmony between technology and nature
> APPROACH: Sustainable, beautiful, functional`;
    }

    // General AI-style responses
    const responses = [
      `QUANTUM PROCESSING COMPLETE... LEGEND STATUS: CONFIRMED.

I've analyzed your query against our comprehensive service database. The Legendary Hustlers Crew operates at the intersection of traditional craftsmanship and futuristic innovation.

Our cyberpunk approach means we use cutting-edge tools for age-old problems. From chainsaw carving to VR property mapping, we're redefining what a service company can be.

ENHANCED QUERY OPTIONS: SERVICES | TEAM | CONTACT | EMERGENCY`,

      `NEURAL NETWORK SCAN COMPLETE... ACCESSING CREW PROTOCOLS...

As your digital liaison, I possess complete knowledge of our operations. We're not just another service company - we're legends in our field. Our diverse skill set spans from cattle ranching to 3D printing.

What sets us apart? Our founder's firefighting background, our tech director's coding expertise, our construction lead's artistic vision, and our landscape designer's zen approach.

NEED SPECIFIC ASSISTANCE? Try: QUOTE | NAVIGATE | HELP`,

      `CYBERNETIC ANALYSIS ENGAGED... LEGENDARY PROTOCOLS ACTIVE...

The data is clear: Legendary Hustlers Crew tackles projects others won't even attempt. Our secret? Combining old-school expertise with new-world technology.

Whether you need a gnome-style rockwall or emergency tree removal, we deliver with precision and style. Our yakisugi wood preparation service exemplifies our approach - ancient Japanese techniques meets modern application.

READY TO INITIATE PROJECT? Use: CONTACT | SERVICES | QUOTE`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const response = await generateResponse(input);
      const botMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] bg-black border-2 border-green-500 p-4 hover:bg-green-500 hover:text-black transition-all shadow-2xl"
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">🤖</span>
          <span className="font-bold text-green-500 hover:text-black font-mono">LEGENDARY BOT</span>
        </div>
      </button>
    );
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] w-96 h-[500px] bg-black border-2 border-green-500 shadow-2xl"
      style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
    >
      {/* Header */}
      <div className="bg-green-500 text-black p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span>🤖</span>
          <span className="font-bold">LEGENDARY HUSTLER BOT v2.77.4</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-black hover:text-green-500 px-2 py-1 text-sm font-bold"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="h-[400px] overflow-y-auto p-4 bg-black text-green-500 font-mono text-sm">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            {message.role === 'user' ? (
              <div className="text-yellow-500">
                <span className="text-cyan-500">USER@LEGENDARY:</span> {message.content}
              </div>
            ) : (
              <div className="whitespace-pre-line text-green-500">
                {message.content}
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="text-green-500">
            <span className="text-cyan-500">LEGENDARY-BOT:</span> 
            <span className="animate-pulse"> Processing query...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t-2 border-green-500 bg-black p-2">
        <div className="flex items-center text-green-500 font-mono text-sm">
          <span className="text-cyan-500 mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-500"
            placeholder="Enter command..."
            autoFocus
          />
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>█</span>
        </div>
      </form>
    </div>
  );
} 