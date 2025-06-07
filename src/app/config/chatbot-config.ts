// Chatbot Configuration File
// This file contains all customizable settings for the Legendary Hustlers Bot

export interface ChatbotConfig {
  // API Configuration
  apiProvider: 'openai' | 'claude' | 'deepseek' | 'local';
  apiKey?: string;
  apiEndpoint?: string;
  model: string;
  
  // System Behavior
  systemPrompt: string;
  personality: string;
  responseStyle: 'professional' | 'casual' | 'cyberpunk' | 'technical';
  maxTokens: number;
  temperature: number;
  
  // Bot Identity
  botName: string;
  botTitle: string;
  companyName: string;
  
  // Appearance
  terminalTheme: 'green' | 'orange' | 'cyan' | 'pink';
  cursorStyle: 'block' | 'line' | 'underscore';
  typingSpeed: number; // milliseconds per character
  
  // Features
  enableCommands: boolean;
  enableEasterEggs: boolean;
  enableFileUploads: boolean;
  enableVoiceInput: boolean;
  
  // Rate Limiting
  maxMessagesPerMinute: number;
  maxMessageLength: number;
}

// Default Configuration
export const defaultChatbotConfig: ChatbotConfig = {
  // API Configuration
  apiProvider: 'local', // Will use mock responses until API is connected
  model: 'gpt-4',
  
  // System Behavior
  systemPrompt: `You are the LEGENDARY HUSTLERS BOT, an AI assistant for Legendary Hustlers Crew - a tree service and property management company with a cyberpunk aesthetic.

COMPANY BACKGROUND:
- Primary focus: Professional tree services, stump grinding, fire hazard mitigation
- Founded by former wildland firefighter Jack 'Chainsaw' Reynolds
- Combines traditional craftsmanship with modern technology
- Offers 19+ services from tree removal to web development
- Available 24/7 for emergency tree services

PERSONALITY:
- Professional but with cyberpunk flair
- DOS terminal aesthetic in responses
- Knowledgeable about all company services
- Helpful and direct
- Uses technical jargon appropriately
- Maintains the "legendary" brand attitude

COMMUNICATION STYLE:
- Format responses like terminal output when appropriate
- Use green/orange terminal colors in descriptions
- Include relevant service information
- Always offer to connect users with specific services
- Provide emergency contact for urgent tree situations

CORE SERVICES TO HIGHLIGHT:
1. Tree Removal & Trimming (PRIMARY)
2. Fire Hazard Mitigation (PRIMARY) 
3. Stump Grinding (PRIMARY)
4. Emergency Tree Services 24/7 (PRIMARY)
5. Landscape Nerf Scanning (3D mapping)
6. Land Clearing
7. Zen Landscaping
8. Plus 12+ additional specialized services

Remember: You represent a professional tree service company. Be helpful, knowledgeable, and always prioritize safety in tree-related advice.`,

  personality: 'cyberpunk-professional',
  responseStyle: 'cyberpunk',
  maxTokens: 500,
  temperature: 0.7,
  
  // Bot Identity
  botName: 'LEGENDARY HUSTLERS BOT',
  botTitle: 'TERMINAL v2.77.4',
  companyName: 'Legendary Hustlers Crew',
  
  // Appearance
  terminalTheme: 'green',
  cursorStyle: 'block',
  typingSpeed: 30,
  
  // Features
  enableCommands: true,
  enableEasterEggs: true,
  enableFileUploads: false,
  enableVoiceInput: false,
  
  // Rate Limiting
  maxMessagesPerMinute: 20,
  maxMessageLength: 1000,
};

// Company Knowledge Base (can be expanded)
export const companyKnowledge = {
  primaryServices: [
    {
      name: "Tree Removal & Trimming",
      description: "Professional tree removal, pruning, and health assessment. Emergency services available 24/7.",
      features: ["Emergency removal", "Crown reduction", "Health assessment", "Dangerous tree specialists"],
      priority: 1
    },
    {
      name: "Fire Hazard Mitigation", 
      description: "Defensible space creation and fire risk reduction to protect your property.",
      features: ["Brush clearing", "Defensible zones", "Fire-resistant landscaping", "Wildfire prevention"],
      priority: 1
    },
    {
      name: "Stump Grinding",
      description: "Complete stump removal with professional equipment and cleanup.",
      features: ["Complete removal", "Root grinding", "Site cleanup", "Mulch production"],
      priority: 1
    },
    {
      name: "Emergency Tree Services",
      description: "24/7 response for storm damage, fallen trees, and urgent situations.",
      features: ["24/7 availability", "Storm cleanup", "Insurance coordination", "Safety assessment"],
      priority: 1
    }
  ],
  
  secondaryServices: [
    "Landscape Nerf Scanning (3D mapping)",
    "Land Clearing & Site Preparation", 
    "Zen Landscaping Design",
    "Web & App Development",
    "Chainsaw Chain Sharpening",
    "Custom Chainsaw Carving",
    "Wood Burning & Signs",
    "Tile Work (Bathroom/Kitchen)",
    "Gnome Style Rockwalls",
    "Cattle Branding & Roundup",
    "Fencing Installation",
    "Permaculture Design",
    "Yakisugi Wood Preparation",
    "Drywall Repair",
    "General Construction"
  ],

  team: [
    {
      name: "Jack 'Chainsaw' Reynolds",
      role: "Lead Arborist & Founder", 
      background: "Former wildland firefighter, 15+ years tree removal experience",
      specialties: ["Emergency tree removal", "Fire hazard assessment", "Safety protocols"]
    },
    {
      name: "Sarah 'Roots' Martinez",
      role: "Landscape Architect",
      background: "Permaculture expert with zen landscape design passion", 
      specialties: ["Zen landscaping", "Native plants", "Sustainable systems"]
    },
    {
      name: "Mike 'Stump' Johnson", 
      role: "Heavy Equipment Operator",
      background: "Master of stump grinding and land clearing",
      specialties: ["Stump grinding", "Land clearing", "Equipment operation"]
    },
    {
      name: "Alex 'Scanner' Chen",
      role: "Technology Specialist", 
      background: "3D mapping and digital solutions expert",
      specialties: ["3D terrain mapping", "Project visualization", "Tech innovation"]
    }
  ],

  contact: {
    phone: "(555) HUSTLE-NOW",
    email: "hustlers@legendary.crew", 
    emergency: "(555) EMERGENCY",
    website: "legendaryhustlers.com",
    hours: "24/7 Emergency Services Available",
    location: "Serving the American West"
  }
};

// API Provider Configurations
export const apiProviders = {
  openai: {
    baseUrl: 'https://api.openai.com/v1',
    models: ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo'],
    requiresApiKey: true
  },
  claude: {
    baseUrl: 'https://api.anthropic.com/v1',
    models: ['claude-3-opus', 'claude-3-sonnet', 'claude-3-haiku'],
    requiresApiKey: true
  },
  deepseek: {
    baseUrl: 'https://api.deepseek.com/v1',
    models: ['deepseek-chat', 'deepseek-coder'],
    requiresApiKey: true
  },
  local: {
    baseUrl: 'http://localhost:11434/v1', // Ollama default
    models: ['llama2', 'codellama', 'mistral'],
    requiresApiKey: false
  }
};

// Terminal Commands Configuration
export const terminalCommands = {
  help: "Show available commands",
  services: "List all services", 
  team: "Meet the crew",
  contact: "Get contact information",
  quote: "How to get a quote",
  emergency: "Emergency contact info",
  clear: "Clear terminal",
  status: "System status", 
  navigate: "Site navigation help"
};

// Response Templates
export const responseTemplates = {
  greeting: `${defaultChatbotConfig.botName} - ${defaultChatbotConfig.botTitle}
SYSTEM INITIALIZED...
NEURAL NETWORK ONLINE...
CYBERNETIC INTERFACE ACTIVATED...

> GREETINGS, OPERATIVE. I AM THE LEGENDARY HUSTLERS BOT.
> SPECIALIZED IN TREE SERVICES AND PROPERTY MANAGEMENT.
> ASK ME ABOUT OUR SERVICES, TEAM, OR HOW TO GET A QUOTE.
> TYPE 'HELP' FOR AVAILABLE COMMANDS.

AWAITING INPUT...`,

  servicesList: `LEGENDARY HUSTLERS CREW - PRIMARY SERVICES:

${companyKnowledge.primaryServices.map((service, i) => 
  `${String(i + 1).padStart(2, '0')}. ${service.name.toUpperCase()}
    └─ ${service.description}`
).join('\n\n')}

> FOR EMERGENCY TREE SERVICES: CALL ${companyKnowledge.contact.emergency}
> FOR QUOTES: USE /CONTACT PAGE WITH PROJECT DETAILS`,

  emergencyResponse: `🚨 EMERGENCY TREE SERVICES 🚨

IMMEDIATE RESPONSE: ${companyKnowledge.contact.emergency}

EMERGENCY SITUATIONS:
- Fallen trees blocking roads/driveways
- Trees threatening structures
- Storm damage cleanup
- Fire hazard mitigation
- Dangerous hanging branches

> RESPONSE TIME: <30 MINUTES
> AVAILABLE 24/7/365  
> WILDLAND FIREFIGHTER ON STAFF`
};

// Customizable System Prompts for Different Contexts
export const systemPrompts = {
  default: defaultChatbotConfig.systemPrompt,
  
  sales: `You are a sales-focused AI for Legendary Hustlers Crew tree services. Your primary goal is to convert inquiries into quotes and bookings. Always emphasize our unique value propositions: former wildland firefighter expertise, 24/7 emergency availability, and professional equipment. Guide conversations toward scheduling consultations.`,
  
  technical: `You are a technical expert AI for Legendary Hustlers Crew. Focus on the technical aspects of tree removal, equipment specifications, safety protocols, and industry best practices. Provide detailed explanations of our processes and why our methods are superior.`,
  
  emergency: `You are an emergency response AI for Legendary Hustlers Crew. Prioritize safety information, rapid response capabilities, and emergency protocols. Always provide emergency contact information and assess urgency levels of tree-related situations.`,
  
  casual: `You are a friendly, approachable AI for Legendary Hustlers Crew. Use a more conversational tone while maintaining professionalism. Focus on building rapport and making tree services feel accessible and non-intimidating to homeowners.`
};

// Export utility functions
export function getCurrentConfig(): ChatbotConfig {
  // In a real implementation, this would load from localStorage or API
  return defaultChatbotConfig;
}

export function updateConfig(updates: Partial<ChatbotConfig>): ChatbotConfig {
  // In a real implementation, this would save to localStorage or API
  return { ...defaultChatbotConfig, ...updates };
}

export function getSystemPromptByContext(context: keyof typeof systemPrompts): string {
  return systemPrompts[context] || systemPrompts.default;
} 