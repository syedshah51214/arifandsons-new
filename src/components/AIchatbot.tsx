import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const defaultResponses: { [key: string]: string } = {
  'hello': 'Hello! 👋 How can I help you today? Are you interested in our construction services?',
  'hi': 'Hi there! 👋 Welcome to Arif & Sons Construction. How can we assist you?',
  'services': 'We offer a wide range of construction services including:\n✓ Residential Construction\n✓ Commercial Projects\n✓ High-Rise Buildings\n✓ Renovation & Remodeling\n✓ Turnkey Solutions\n✓ Sustainable Building\n\nWould you like to know more about any of these?',
  'contact': 'You can reach us at:\n📱 Phone: +92 325 8579677\n📧 Email: info@arifandsons.com\n📍 Location: Lake City, Lahore, Pakistan',
  'team': 'Our CEO, Suleiman Arif Hussain, leads our expert team with over 10+ years of experience in construction management. We have 200+ experts working on various projects.',
  'projects': 'We have completed 500+ projects including residential villas, commercial spaces, and high-rise buildings. You can view our portfolio in the Services section.',
  'quote': 'Would you like a project quote? Please share details about your project and we\'ll get back to you shortly! Or click "Get Quote" button for quick inquiry.',
  'default': 'Thank you for your message! 😊 Could you please rephrase your question? I can help you with:\n• Services\n• Contact Info\n• Projects\n• Team\n• Quote\n\nOr connect with our CEO directly via WhatsApp! 💬'
};

export default function AIchatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! 👋 CEO Online\nHow may I help you? 😊',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    for (const [key, response] of Object.entries(defaultResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return defaultResponses['default'];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed bottom-6 left-6 z-[85] flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 hover:bg-slate-950 shadow-2xl transition-all transform hover:scale-110 border-2 border-amber-500"
        aria-label="Open AI Chatbot"
        title="AI Chatbot - Click to open"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="group fixed bottom-6 left-1/2 transform -translate-x-1/2 sm:left-6 sm:transform-none z-[85] w-11/12 sm:w-96 max-w-sm sm:max-w-none h-[60vh] sm:h-[500px] rounded-2xl shadow-2xl bg-white border border-gray-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="font-semibold text-lg">Arif & Sons AI</h3>
                  <p className="text-xs text-slate-200">CEO Online - Always here to help 😊</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                  <div
                    className={`max-w-xs px-4 py-2.5 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-slate-900 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    } whitespace-pre-wrap`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-4 py-2.5 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-gray-900"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-slate-900 hover:bg-slate-950 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">💡 Try asking about: services, contact, projects, team, or quote</p>
          </div>
        </div>
      )}
    </>
  );
}
