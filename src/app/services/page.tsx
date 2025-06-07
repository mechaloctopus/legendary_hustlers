'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LegendaryBot from '../components/LegendaryBot';

export default function Services() {
  const [showDropdown, setShowDropdown] = useState(false);

  const webTechServices = [
    {
      title: "WEB & APP DEVELOPMENT",
      description: "Custom websites, mobile apps, 3D models, and 3D printing services. From concept to deployment, we build the future.",
      icon: "💻",
      features: ["Custom websites", "Mobile applications", "3D modeling", "3D printing services"]
    },
    {
      title: "DIGITAL MARKETING",
      description: "SEO optimization, social media management, and digital advertising campaigns.",
      icon: "📱",
      features: ["SEO optimization", "Social media management", "Digital advertising", "Content creation"]
    }
  ];

  const craftsmanshipServices = [
    {
      title: "CHAINSAW CHAIN SHARPENING",
      description: "Professional chainsaw maintenance and sharpening services. Keep your tools razor-sharp and ready for action.",
      icon: "⚡",
      features: ["Chain sharpening", "Bar maintenance", "Equipment service", "Tool repair"]
    },
    {
      title: "CHAINSAW CARVING",
      description: "Custom chainsaw sculptures and artistic woodworking. From bears to eagles, we carve your vision into reality.",
      icon: "🪓",
      features: ["Custom sculptures", "Artistic woodworking", "Wildlife carvings", "Memorial pieces"]
    },
    {
      title: "WOOD BURNING & CUSTOM SIGNS",
      description: "Pyrography art and custom signage. Personalized wooden signs for homes, businesses, and special occasions.",
      icon: "🔥",
      features: ["Pyrography art", "Custom signage", "Business signs", "Personalized designs"]
    },
    {
      title: "YAKISUGI WOOD PREPARATION",
      description: "Traditional Japanese charred wood technique (Shou Sugi Ban). Natural wood preservation and stunning aesthetics.",
      icon: "🌸",
      features: ["Shou Sugi Ban technique", "Wood preservation", "Aesthetic finishing", "Traditional methods"]
    }
  ];

  const constructionServices = [
    {
      title: "BATHROOM & KITCHEN TILE WORK",
      description: "Expert tile installation, repair, and restoration. Transform your space with precision craftsmanship.",
      icon: "🏠",
      features: ["Tile installation", "Bathroom remodeling", "Kitchen upgrades", "Repair services"]
    },
    {
      title: "GNOME STYLE ROCKWALLS",
      description: "Artistic stone wall construction with whimsical gnome-inspired designs. Functional art for your landscape.",
      icon: "🗿",
      features: ["Stone wall construction", "Artistic designs", "Landscape integration", "Custom rockwork"]
    },
    {
      title: "DRYWALL REPAIR",
      description: "Professional drywall installation, repair, and texturing. Orange peel, knockdown, and custom finishes.",
      icon: "🧱",
      features: ["Drywall installation", "Repair services", "Custom texturing", "Finish work"]
    },
    {
      title: "FENCING",
      description: "Farm fencing, residential fencing, and boundary marking. Secure your property with quality installation.",
      icon: "🚧",
      features: ["Farm fencing", "Residential fencing", "Boundary marking", "Security installation"]
    }
  ];

  const agricultureServices = [
    {
      title: "CATTLE BRANDING & ROUNDUP",
      description: "Professional livestock handling, branding, and roundup services. Experience with large-scale operations.",
      icon: "🐄",
      features: ["Livestock handling", "Cattle branding", "Roundup services", "Ranch operations"]
    },
    {
      title: "PERMACULTURE SERVICES",
      description: "Large-scale permaculture design and hugelkultur implementation. Sustainable land management solutions.",
      icon: "🌱",
      features: ["Permaculture design", "Hugelkultur systems", "Sustainable farming", "Soil restoration"]
    },
    {
      title: "BASIC MECHANICKING",
      description: "Tractor repair, equipment maintenance, and mechanical services. Keeping your machinery running smooth.",
      icon: "🔧",
      features: ["Tractor repair", "Equipment maintenance", "Mechanical services", "Preventive care"]
    }
  ];

  const specialtyServices = [
    {
      title: "CUSTOM ART & CONSTRUCTION",
      description: "Bespoke artistic installations and custom construction projects. From concept to completion.",
      icon: "🎨",
      features: ["Artistic installations", "Custom construction", "Unique projects", "Creative solutions"]
    },
    {
      title: "EMERGENCY CLEANUP",
      description: "Last-minute furniture moving, deep cleaning, pressure washing, and emergency cleanup services.",
      icon: "🧹",
      features: ["Furniture moving", "Deep cleaning", "Pressure washing", "Emergency response"]
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
              <Link href="/about" className="terminal-text hover:terminal-text-orange transition-colors">ABOUT</Link>
              <Link href="/contact" className="terminal-text hover:terminal-text-orange transition-colors">CONTACT</Link>
              <Link href="/services" className="terminal-text-orange transition-colors">ALL SERVICES</Link>
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
                <Link href="/services" className="terminal-text-orange block px-3 py-2 text-base font-medium w-full text-center">ALL SERVICES</Link>
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
              ALL SERVICES
            </h1>
            
            <h2 className="terminal-text-orange text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-relaxed">
              COMPLETE SERVICE CATALOG
            </h2>
            
            <p className="terminal-text text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Beyond our core tree services, we offer a comprehensive range of specialized solutions 
              through our network of skilled craftsmen and technology partners.
            </p>
            
            <Link href="/contact" className="cyber-button inline-block">
              GET QUOTE FOR ANY SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* Web & Technology Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            WEB & TECHNOLOGY SERVICES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {webTechServices.map((service, index) => (
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

      {/* Craftsmanship Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            CRAFTSMANSHIP & ARTISTRY
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {craftsmanshipServices.map((service, index) => (
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

      {/* Construction Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            CONSTRUCTION & BUILDING
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {constructionServices.map((service, index) => (
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

      {/* Agriculture Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            AGRICULTURE & RANCH SERVICES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {agricultureServices.map((service, index) => (
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

      {/* Specialty Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="pixel-text text-center text-lg md:text-xl lg:text-2xl mb-12">
            SPECIALTY SERVICES
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {specialtyServices.map((service, index) => (
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

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/80">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="pixel-text text-lg md:text-xl lg:text-2xl">
            READY TO GET STARTED?
          </h2>
          <p className="terminal-text text-base md:text-lg leading-relaxed">
            No matter the service, we have the expertise and network to handle your project. 
            Contact us for a consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button w-full sm:w-auto text-center">
              GET DETAILED QUOTE
            </Link>
            <Link href="/" className="cyber-button w-full sm:w-auto text-center">
              BACK TO HOME
            </Link>
          </div>
        </div>
      </section>

      <LegendaryBot />
    </div>
  );
} 