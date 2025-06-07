'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChatbotConfig, 
  defaultChatbotConfig, 
  apiProviders, 
  systemPrompts,
  getCurrentConfig,
  updateConfig 
} from '../config/chatbot-config';

export default function AdminPanel() {
  const [config, setConfig] = useState<ChatbotConfig>(defaultChatbotConfig);
  const [activeTab, setActiveTab] = useState<'general' | 'api' | 'prompts' | 'appearance' | 'test'>('general');
  const [testMessage, setTestMessage] = useState('Hello, I need help with tree removal');
  const [testResponse, setTestResponse] = useState('');
  const [isTestingBot, setIsTestingBot] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  useEffect(() => {
    // Load current configuration
    const currentConfig = getCurrentConfig();
    setConfig(currentConfig);
  }, []);

  const handleConfigUpdate = (updates: Partial<ChatbotConfig>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    
    // Auto-save (in a real app, this might be debounced)
    setSaveStatus('saving');
    try {
      updateConfig(updates);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const testChatbot = async () => {
    setIsTestingBot(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: config.systemPrompt },
            { role: 'user', content: testMessage }
          ],
          apiProvider: config.apiProvider
        }),
      });

      const data = await response.json();
      setTestResponse(data.response || 'No response received');
    } catch (error) {
      setTestResponse('Error testing chatbot: ' + error);
    } finally {
      setIsTestingBot(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative scanlines">
      <div className="cyberpunk-grid"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm cyber-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="terminal-text-orange font-bold text-lg">ADMIN PANEL</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`text-xs px-2 py-1 rounded ${
                saveStatus === 'saved' ? 'bg-green-600 text-white' :
                saveStatus === 'saving' ? 'bg-yellow-600 text-black' :
                saveStatus === 'error' ? 'bg-red-600 text-white' :
                'terminal-text'
              }`}>
                {saveStatus === 'saved' ? 'SAVED' :
                 saveStatus === 'saving' ? 'SAVING...' :
                 saveStatus === 'error' ? 'ERROR' : 'READY'}
              </div>
              <Link href="/" className="cyber-button text-xs px-3 py-2">
                BACK TO SITE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Interface */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="pixel-text text-xl md:text-2xl lg:text-3xl text-center mb-4">
              CHATBOT CONFIGURATION PANEL
            </h1>
            <p className="terminal-text text-center">
              Configure the Legendary Hustlers Bot settings, system prompts, and API providers.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['general', 'api', 'prompts', 'appearance', 'test'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`cyber-button px-4 py-2 text-sm ${
                  activeTab === tab ? 'bg-terminal-green text-black' : ''
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="terminal-style p-6">
            
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="terminal-text-orange text-lg font-bold mb-4">GENERAL SETTINGS</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      BOT NAME
                    </label>
                    <input
                      type="text"
                      value={config.botName}
                      onChange={(e) => handleConfigUpdate({ botName: e.target.value })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      BOT TITLE/VERSION
                    </label>
                    <input
                      type="text"
                      value={config.botTitle}
                      onChange={(e) => handleConfigUpdate({ botTitle: e.target.value })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      RESPONSE STYLE
                    </label>
                    <select
                      value={config.responseStyle}
                      onChange={(e) => handleConfigUpdate({ responseStyle: e.target.value as ChatbotConfig['responseStyle'] })}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      <option value="professional">Professional</option>
                      <option value="casual">Casual</option>
                      <option value="cyberpunk">Cyberpunk</option>
                      <option value="technical">Technical</option>
                    </select>
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      TYPING SPEED (ms per character)
                    </label>
                    <input
                      type="number"
                      min="10"
                      max="200"
                      value={config.typingSpeed}
                      onChange={(e) => handleConfigUpdate({ typingSpeed: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="terminal-text-orange font-bold">FEATURES</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { key: 'enableCommands', label: 'Terminal Commands' },
                      { key: 'enableEasterEggs', label: 'Easter Eggs' },
                      { key: 'enableFileUploads', label: 'File Uploads' },
                      { key: 'enableVoiceInput', label: 'Voice Input' }
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={config[key as keyof ChatbotConfig] as boolean}
                          onChange={(e) => handleConfigUpdate({ [key]: e.target.checked })}
                          className="form-checkbox h-4 w-4 text-terminal-green"
                        />
                        <span className="terminal-text text-sm">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* API Settings */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                <h2 className="terminal-text-orange text-lg font-bold mb-4">API CONFIGURATION</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      API PROVIDER
                    </label>
                    <select
                      value={config.apiProvider}
                      onChange={(e) => handleConfigUpdate({ apiProvider: e.target.value as ChatbotConfig['apiProvider'] })}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      {Object.entries(apiProviders).map(([key, provider]) => (
                        <option key={key} value={key}>
                          {key.toUpperCase()} {provider.requiresApiKey ? '(Requires API Key)' : '(Local)'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      MODEL
                    </label>
                    <select
                      value={config.model}
                      onChange={(e) => handleConfigUpdate({ model: e.target.value })}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      {apiProviders[config.apiProvider]?.models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>

                  {apiProviders[config.apiProvider]?.requiresApiKey && (
                    <div className="md:col-span-2">
                      <label className="block terminal-text text-sm font-bold mb-2">
                        API KEY
                      </label>
                      <input
                        type="password"
                        value={config.apiKey || ''}
                        onChange={(e) => handleConfigUpdate({ apiKey: e.target.value })}
                        placeholder="Enter your API key..."
                        className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                      />
                      <p className="text-xs terminal-text mt-2">
                        Keep your API key secure. It will be stored locally.
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      MAX TOKENS
                    </label>
                    <input
                      type="number"
                      min="50"
                      max="2000"
                      value={config.maxTokens}
                      onChange={(e) => handleConfigUpdate({ maxTokens: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      TEMPERATURE (0.0 - 1.0)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.1"
                      value={config.temperature}
                      onChange={(e) => handleConfigUpdate({ temperature: parseFloat(e.target.value) })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* System Prompts */}
            {activeTab === 'prompts' && (
              <div className="space-y-6">
                <h2 className="terminal-text-orange text-lg font-bold mb-4">SYSTEM PROMPTS</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      PROMPT TEMPLATE
                    </label>
                    <select
                      onChange={(e) => {
                        if (e.target.value) {
                          handleConfigUpdate({ systemPrompt: systemPrompts[e.target.value as keyof typeof systemPrompts] });
                        }
                      }}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      <option value="">Select a template...</option>
                      {Object.keys(systemPrompts).map((key) => (
                        <option key={key} value={key}>{key.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      CUSTOM SYSTEM PROMPT
                    </label>
                    <textarea
                      value={config.systemPrompt}
                      onChange={(e) => handleConfigUpdate({ systemPrompt: e.target.value })}
                      rows={12}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none text-sm"
                      placeholder="Enter your custom system prompt..."
                    />
                    <p className="text-xs terminal-text mt-2">
                      This prompt defines the bot&apos;s personality, knowledge, and behavior.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance */}
            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="terminal-text-orange text-lg font-bold mb-4">APPEARANCE SETTINGS</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      TERMINAL THEME
                    </label>
                    <select
                      value={config.terminalTheme}
                      onChange={(e) => handleConfigUpdate({ terminalTheme: e.target.value as ChatbotConfig['terminalTheme'] })}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      <option value="green">Green (Classic)</option>
                      <option value="orange">Orange (Modern)</option>
                      <option value="cyan">Cyan (Cool)</option>
                      <option value="pink">Pink (Retro)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      CURSOR STYLE
                    </label>
                    <select
                      value={config.cursorStyle}
                      onChange={(e) => handleConfigUpdate({ cursorStyle: e.target.value as ChatbotConfig['cursorStyle'] })}
                      className="w-full bg-black border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    >
                      <option value="block">Block</option>
                      <option value="line">Line</option>
                      <option value="underscore">Underscore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      MAX MESSAGE LENGTH
                    </label>
                    <input
                      type="number"
                      min="100"
                      max="2000"
                      value={config.maxMessageLength}
                      onChange={(e) => handleConfigUpdate({ maxMessageLength: parseInt(e.target.value) })}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Test Bot */}
            {activeTab === 'test' && (
              <div className="space-y-6">
                <h2 className="terminal-text-orange text-lg font-bold mb-4">TEST CHATBOT</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block terminal-text text-sm font-bold mb-2">
                      TEST MESSAGE
                    </label>
                    <input
                      type="text"
                      value={testMessage}
                      onChange={(e) => setTestMessage(e.target.value)}
                      className="w-full bg-transparent border border-terminal-green p-3 terminal-text focus:border-terminal-orange focus:outline-none"
                      placeholder="Enter a test message..."
                    />
                  </div>

                  <button
                    onClick={testChatbot}
                    disabled={isTestingBot || !testMessage.trim()}
                    className="cyber-button px-6 py-3 disabled:opacity-50"
                  >
                    {isTestingBot ? 'TESTING...' : 'TEST BOT RESPONSE'}
                  </button>

                  {testResponse && (
                    <div>
                      <label className="block terminal-text text-sm font-bold mb-2">
                        BOT RESPONSE
                      </label>
                      <div className="terminal-style p-4">
                        <pre className="whitespace-pre-wrap terminal-text text-sm">
                          {testResponse}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                <div className="terminal-style p-4">
                  <h3 className="terminal-text-orange font-bold mb-2">CURRENT CONFIGURATION</h3>
                  <pre className="terminal-text text-xs overflow-x-auto">
                    {JSON.stringify(config, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 