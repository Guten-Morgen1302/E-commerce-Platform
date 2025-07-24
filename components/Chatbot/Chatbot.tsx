// IMPORTANT: This component is written in TypeScript React (TSX).
// It should be saved as `Chatbot.tsx` in your project (e.g., src/components/Chatbot/Chatbot.tsx).
"use client";
import React, { useState, useEffect, useRef } from 'react';
// Make sure lucide-react is installed: npm install lucide-react
import { Send, MessageSquare } from 'lucide-react'; // Added MessageSquare for toggle icon

// Define a type for your messages for better TypeScript safety (if using .tsx)
interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

// Chatbot component that can be placed anywhere in your React app
export default function Chatbot() {
  // State to control the visibility of the chat window
  const [isOpen, setIsOpen] = useState(false);
  // State to hold all chat messages
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // State to hold the current message being typed by the user
  const [inputText, setInputText] = useState<string>('');
  // Ref for the chat messages container to enable auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat window whenever messages update
  useEffect(() => {
    if (isOpen) { // Only scroll if the chat is open
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Function to scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle sending a message
  const sendMessage = async () => {
    // Prevent sending empty messages
    if (inputText.trim() === '') {
      return;
    }

    // Add user's message to the chat history
    const userMessage: ChatMessage = { sender: 'user', text: inputText.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText(''); // Clear the input field

    try {
      // --- API Call to Backend ---
      // IMPORTANT: Replace 'http://localhost:5000/api/chat' with your actual Flask API endpoint
      // Ensure your Flask backend is running on this URL and port
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userMessage.text }), // Sending user's message
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData.message}`);
      }

      const data: { response?: string } = await response.json(); // Type the expected response
      const botResponseText = data.response || 'No response from bot.'; // Expecting {"response": "..."}
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponseText }]);

    } catch (error: any) { // Use 'any' for error type or define a more specific Error type
      console.error('Error sending message to bot:', error);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: `Error: Could not connect to bot. (${error.message})` }]);
    }
  };

  // Handle Enter key press to send message
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => { // Specify event type
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    // Fixed positioning for the chatbot container at bottom-right
    // z-50 ensures it's on top of other content
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out flex items-center justify-center"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? (
          <MessageSquare size={24} className="rotate-45" /> // Icon when open
        ) : (
          <MessageSquare size={24} /> // Icon when closed
        )}
      </button>

      {/* Chat Window (conditionally rendered and animated) */}
      {isOpen && (
        <div
          className="mt-4 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col transform origin-bottom-right transition-all duration-300 ease-in-out scale-100 opacity-100"
          // You can add more complex animations here if desired
          // For example, using a library like Framer Motion
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-3 text-white text-center rounded-t-lg">
            <h2 className="text-xl font-bold">ShopEase Support Bot</h2>
            <p className="text-xs opacity-90">How can I assist you?</p>
          </div>

          {/* Messages Display Area */}
          <div className="flex-grow p-3 overflow-y-auto space-y-3 bg-gray-50" ref={messagesEndRef}>
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8 text-sm">
                Type a message to start chatting!
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg shadow-sm text-sm ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Area */}
          <div className="p-3 bg-gray-100 border-t border-gray-200 flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700 text-sm"
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
