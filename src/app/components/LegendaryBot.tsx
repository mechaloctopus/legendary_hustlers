'use client';

import { useState, useEffect, useRef } from 'react';
import { getCurrentConfig, companyKnowledge, responseTemplates, terminalCommands } from '../config/chatbot-config';

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
  const [config] = useState(getCurrentConfig());

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

  // Initial greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        const greeting = {
          role: 'assistant' as const,
          content: responseTemplates.greeting,
          timestamp: new Date()
        };
        setMessages([greeting]);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  // Generate response using API or local commands
  const generateResponse = async (userInput: string): Promise<string> => {
    const input = userInput.toLowerCase().trim();
    
    // Handle local commands if enabled
    if (config.enableCommands) {
      // Command responses that don't need API
      if (input === 'help') {
        return `AVAILABLE COMMANDS:

${Object.entries(terminalCommands).map(([cmd, desc]) => 
  `> ${cmd.toUpperCase().padEnd(12)} - ${desc}`
).join('\n')}

Or just ask me anything about ${config.companyName}!`;
      }

      if (input === 'services') {
        return responseTemplates.servicesList;
      }

      if (input === 'team') {
        return `LEGENDARY CREW MEMBERS - CLASSIFIED PROFILES:

${companyKnowledge.team.map((member, i) => 
  `${String(i + 1).padStart(2, '0')}. ${member.name.toUpperCase()}
    ROLE: ${member.role}
    BACKGROUND: ${member.background}
    SPECIALTIES: ${member.specialties.join(', ')}`
).join('\n\n')}

> COMBINED EXPERIENCE: 50+ YEARS IN THE FIELD
> EACH OPERATIVE SPECIALIZES IN MULTIPLE DISCIPLINES`;
      }

      if (input === 'contact') {
        return `COMMUNICATION CHANNELS:

PRIMARY VOICE: ${companyKnowledge.contact.phone}
DATA PACKET: ${companyKnowledge.contact.email}  
EMERGENCY LINE: ${companyKnowledge.contact.emergency}
WEBSITE: ${companyKnowledge.contact.website}

HOURS: ${companyKnowledge.contact.hours}
LOCATION: ${companyKnowledge.contact.location}

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
> EMERGENCY QUOTES AVAILABLE WITHIN 30 MINUTES
> ALL QUOTES ARE FREE AND COMPREHENSIVE`;
      }

      if (input === 'emergency') {
        return responseTemplates.emergencyResponse;
      }

      if (input === 'navigate') {
        return `SITE NAVIGATION MAP:

/ (HOME) - Primary tree services and emergency contact
/ABOUT - Company mission, crew profiles, and our story  
/CONTACT - Detailed quote request form with file upload
/SERVICES - Complete catalog of all available services

QUICK ACTIONS:
- Click service cards for detailed information
- Use navigation menu for page access
- Emergency services always prioritized

> ALL PAGES OPTIMIZED FOR MOBILE DEVICES
> TERMINAL AESTHETIC THROUGHOUT SITE`;
      }

      if (input === 'clear') {
        setMessages([]);
        return 'TERMINAL CLEARED. NEURAL PATHWAYS RESET.';
      }

      if (input === 'status') {
        return `SYSTEM STATUS REPORT:

BOT: ${config.botName}
VERSION: ${config.botTitle}
PROVIDER: ${config.apiProvider.toUpperCase()}
RESPONSE STYLE: ${config.responseStyle.toUpperCase()}

ACTIVE FEATURES:
- Commands: ${config.enableCommands ? 'ENABLED' : 'DISABLED'}
- Easter Eggs: ${config.enableEasterEggs ? 'ENABLED' : 'DISABLED'}
- File Uploads: ${config.enableFileUploads ? 'ENABLED' : 'DISABLED'}

SYSTEM: FULLY OPERATIONAL
NEURAL NETWORK: ONLINE
READY FOR SERVICE REQUESTS`;
      }

      // Easter eggs if enabled
      if (config.enableEasterEggs) {
        if (input.includes('matrix') || input.includes('neo')) {
          return `🔴 MATRIX PROTOCOLS DETECTED 🔴

"There is no spoon... but there are chainsaws."

The Legendary Hustlers Crew operates in both digital and physical realms. We're the bridge between what is and what could be.

RED PILL: Contact us for reality-bending tree services
BLUE PILL: Continue browsing like nothing happened

> CHOICE IS YOURS, OPERATIVE`;
        }

        if (input.includes('skynet') || input.includes('terminator')) {
          return `🤖 CYBERDYNE SYSTEMS REFERENCE DETECTED 🤖

"I'll be back... with a tree removal quote."

Unlike Skynet, we're here to PROTECT your property, not destroy it. Our advanced targeting systems are calibrated for precision tree removal only.

MISSION PARAMETERS:
- Eliminate dangerous trees
- Preserve valuable landscapes  
- Protect human assets
- No collateral damage

> RESISTANCE IS FUTILE... TO OUR COMPETITIVE PRICES`;
        }
      }
    }

    // For non-command inputs, use the API
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: config.systemPrompt
            },
            {
              role: 'user', 
              content: userInput
            }
          ],
          apiProvider: config.apiProvider
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.response || 'Error: Unable to generate response';

    } catch (error) {
      console.error('Chat API Error:', error);
      return `CONNECTION ERROR: Unable to reach AI core systems.

FALLBACK MODE ACTIVATED...

I can still help with basic commands:
- Type 'services' for our service list
- Type 'contact' for contact information  
- Type 'emergency' for urgent tree issues
- Type 'help' for all available commands

Please try your question again, or contact us directly at ${companyKnowledge.contact.phone}`;
    }
  };

  const simulateTyping = (text: string, callback: (displayText: string) => void) => {
    let index = 0;
    const interval = setInterval(() => {
      callback(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, config.typingSpeed);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await generateResponse(userMessage.content);
      
      // Simulate typing effect
      const botMessage: Message = {
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

      simulateTyping(response, (displayText) => {
        setMessages(prev => 
          prev.map((msg, idx) => 
            idx === prev.length - 1 ? { ...msg, content: displayText } : msg
          )
        );
      });

    } catch (error) {
      console.error('Error generating response:', error);
      setIsTyping(false);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: `ERROR: System malfunction detected.

Please try again or contact us directly:
Phone: ${companyKnowledge.contact.phone}
Email: ${companyKnowledge.contact.email}`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const formEvent = new Event('submit', { bubbles: true, cancelable: true }) as unknown as React.FormEvent;
      handleSubmit(formEvent);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cyber-button p-3 md:p-4 text-xs md:text-sm flex items-center gap-2 ${
          isOpen ? 'bg-terminal-green text-black' : ''
        }`}
      >
        <span className="text-lg">🤖</span>
        <span className="hidden sm:block font-bold">
          {isOpen ? 'CLOSE TERMINAL' : config.botName}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[400px] sm:h-[500px] terminal-style flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-terminal-green">
            <div>
              <div className="terminal-text-orange font-bold text-sm">{config.botName}</div>
              <div className="terminal-text text-xs">{config.botTitle}</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="terminal-text-orange hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs md:text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user'
                    ? 'text-right'
                    : 'text-left'
                }`}
              >
                <div
                  className={`inline-block max-w-[80%] p-2 rounded ${
                    message.role === 'user'
                      ? 'bg-terminal-green text-black'
                      : 'terminal-text'
                  }`}
                >
                  <div className="whitespace-pre-wrap break-words">
                    {message.content}
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-left">
                <div className="inline-block p-2 terminal-text">
                  <span>PROCESSING</span>
                  <span className={showCursor ? 'opacity-100' : 'opacity-0'}>█</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-terminal-green">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border border-terminal-green p-2 terminal-text text-xs md:text-sm focus:border-terminal-orange focus:outline-none"
                disabled={isTyping}
                maxLength={config.maxMessageLength}
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="cyber-button px-3 py-2 text-xs md:text-sm disabled:opacity-50"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 