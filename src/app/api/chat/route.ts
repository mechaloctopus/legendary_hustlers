import { NextRequest, NextResponse } from 'next/server';
import { getCurrentConfig, companyKnowledge } from '../../config/chatbot-config';

// This will be expanded to support actual AI APIs
interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  apiProvider?: string;
  customSystemPrompt?: string;
}

// Mock AI Response Generator (replace with actual API calls)
async function generateMockResponse(userMessage: string, systemPrompt: string): Promise<string> {
  const input = userMessage.toLowerCase();
  
  // Emergency detection
  if (input.includes('emergency') || input.includes('fallen tree') || input.includes('storm damage') || input.includes('urgent')) {
    return `🚨 EMERGENCY TREE SERVICES 🚨

I detect this may be an emergency situation. Please call our emergency line immediately:

EMERGENCY HOTLINE: ${companyKnowledge.contact.emergency}

For immediate safety:
- Keep people and vehicles away from fallen/damaged trees
- Do not attempt removal yourself
- Document damage for insurance
- We respond within 30 minutes

Our team includes a former wildland firefighter with extensive emergency response experience.

Is this an active emergency requiring immediate response?`;
  }

  // Service inquiries
  if (input.includes('tree removal') || input.includes('tree service') || input.includes('trim') || input.includes('prune')) {
    return `TREE REMOVAL & TRIMMING SERVICES

Our primary specialty with 15+ years of experience:

✓ Emergency tree removal (24/7)
✓ Professional pruning & trimming  
✓ Health assessments & diagnostics
✓ Hazardous tree specialists
✓ Crown reduction & shaping
✓ Storm damage cleanup

UNIQUE ADVANTAGES:
- Former wildland firefighter expertise
- Professional climbing equipment
- Insurance certified operations
- Same-day emergency response

For accurate quotes, we recommend:
1. Visit /contact page
2. Upload photos/video of the tree(s)
3. Include location and access details

Would you like specific information about tree removal techniques or pricing?`;
  }

  if (input.includes('stump') || input.includes('grind')) {
    return `STUMP GRINDING SERVICES

Complete stump removal with professional equipment:

✓ Complete stump grinding below ground level
✓ Root system grinding for total removal
✓ Site cleanup and debris removal  
✓ Wood chip mulch production
✓ Restoration-ready site preparation

EQUIPMENT:
- Professional stump grinders
- Access equipment for tight spaces
- Specialized tools for large stumps

PROCESS:
1. Site assessment and access planning
2. Professional grinding operation
3. Root zone treatment
4. Complete cleanup
5. Site restoration ready

Most stumps can be ground same-day. Would you like a quote for stump grinding services?`;
  }

  if (input.includes('fire') || input.includes('hazard') || input.includes('defensible')) {
    return `FIRE HAZARD MITIGATION SERVICES

Critical protection services from our wildland firefighter founder:

✓ Defensible space creation (Zones 1, 2, 3)
✓ Fire-resistant landscaping design
✓ Brush & vegetation clearing
✓ Emergency fire prevention
✓ Wildfire risk assessment
✓ Insurance compliance planning

DEFENSIBLE SPACE ZONES:
Zone 1 (0-30ft): Complete clearance around structures
Zone 2 (30-100ft): Reduced fuel loads, strategic clearing  
Zone 3 (100-200ft): Selective thinning & maintenance

With increasing wildfire risks, proper defensible space can save your property and lives.

Our founder's wildland firefighting background provides unique insights into fire behavior and prevention strategies.

Would you like a fire risk assessment for your property?`;
  }

  // Default helpful response
  return `LEGENDARY HUSTLERS CREW - TREE SERVICES

I'm here to help with information about our professional tree services:

PRIMARY SERVICES:
🌲 Tree Removal & Trimming (24/7 Emergency)
🔥 Fire Hazard Mitigation & Defensible Space
⚙️ Professional Stump Grinding
📡 3D Landscape Mapping & Analysis
🚜 Land Clearing & Site Preparation
🏞️ Zen Landscaping Design

Founded by former wildland firefighter Jack 'Chainsaw' Reynolds, we combine traditional expertise with modern techniques.

QUICK ACTIONS:
- Type "emergency" for urgent tree issues
- Type "quote" for pricing information  
- Type "services" for complete service list
- Visit /contact for detailed project quotes

What specific tree service can I help you with today?`;
}

// Future: OpenAI API Integration
async function callOpenAI(messages: ChatMessage[], config: any): Promise<string> {
  // This will be implemented when API key is configured
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${config.apiKey}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     model: config.model,
  //     messages: messages,
  //     max_tokens: config.maxTokens,
  //     temperature: config.temperature,
  //   }),
  // });
  
  throw new Error('OpenAI API not yet configured. Please add API key to enable.');
}

// Future: Claude API Integration  
async function callClaude(messages: ChatMessage[], config: any): Promise<string> {
  // Implementation for Claude API
  throw new Error('Claude API not yet configured. Please add API key to enable.');
}

// Future: DeepSeek API Integration
async function callDeepSeek(messages: ChatMessage[], config: any): Promise<string> {
  // Implementation for DeepSeek API
  throw new Error('DeepSeek API not yet configured. Please add API key to enable.');
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();
    const { messages, apiProvider, customSystemPrompt } = body;
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const config = getCurrentConfig();
    const systemPrompt = customSystemPrompt || config.systemPrompt;
    
    // Get the latest user message
    const userMessage = messages[messages.length - 1]?.content || '';
    
    let response: string;
    
    // Route to appropriate AI provider
    const provider = apiProvider || config.apiProvider;
    
    try {
      switch (provider) {
        case 'openai':
          if (!config.apiKey) {
            throw new Error('OpenAI API key not configured');
          }
          response = await callOpenAI(messages, config);
          break;
          
        case 'claude':
          if (!config.apiKey) {
            throw new Error('Claude API key not configured');
          }
          response = await callClaude(messages, config);
          break;
          
        case 'deepseek':
          if (!config.apiKey) {
            throw new Error('DeepSeek API key not configured');
          }
          response = await callDeepSeek(messages, config);
          break;
          
        case 'local':
        default:
          // Use mock responses until API is configured
          response = await generateMockResponse(userMessage, systemPrompt);
          break;
      }
    } catch (apiError) {
      console.warn(`API Error: ${apiError}. Falling back to mock responses.`);
      response = await generateMockResponse(userMessage, systemPrompt);
    }

    return NextResponse.json({
      response,
      provider: provider,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  const config = getCurrentConfig();
  
  return NextResponse.json({
    status: 'online',
    bot: config.botName,
    version: config.botTitle,
    provider: config.apiProvider,
    features: {
      commands: config.enableCommands,
      easterEggs: config.enableEasterEggs,
      fileUploads: config.enableFileUploads,
    }
  });
} 