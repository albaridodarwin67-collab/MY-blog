import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chatbot({ onOpenDeveloperModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! 👋 What spot or info are you looking for?',
      options: ['Beach 🏖️', 'Highlands ⛰️', 'Eco-Park 🌳', 'Nature 🌿', 'Creator 👨‍💻']
    }
  ]);

  const navigate = useNavigate();

  const handleKeywordSearch = (keyword) => {
    if (!keyword.trim()) return;
    const cleanKey = keyword.toLowerCase();

    const updatedMessages = [
      ...messages,
      { sender: 'user', text: keyword }
    ];

    // 1. BEACH -> Filters feed to display ONLY the 2 beach posts (Pearl Farm & Dahican)
    if (cleanKey.includes('beach') || cleanKey.includes('samal') || cleanKey.includes('dahican') || cleanKey.includes('surf')) {
      updatedMessages.push({
        sender: 'bot',
        text: 'Showing the 5 Blogs for 2Beach destinations! 🏖️',
        options: ['Highlands ⛰️', 'Eco-Park 🌳', 'Nature 🌿', 'Creator 👨‍💻']
      });
      navigate('/blog?category=Beach');

    // 2. HIGHLANDS -> Opens Buda Mountain Highlands post directly
    } else if (cleanKey.includes('highland') || cleanKey.includes('buda')) {
      updatedMessages.push({
        sender: 'bot',
        text: 'Opening Buda Mountain Highlands guide! ⛰️',
        options: ['Beach 🏖️', 'Eco-Park 🌳', 'Nature 🌿', 'Creator 👨‍💻']
      });
      navigate('/blog/2');

    // 3. ECO-PARK -> Opens Eden Nature Park post directly
    } else if (cleanKey.includes('eco') || cleanKey.includes('eden') || cleanKey.includes('park')) {
      updatedMessages.push({
        sender: 'bot',
        text: 'Opening Eden Nature Park guide! 🌳',
        options: ['Beach 🏖️', 'Highlands ⛰️', 'Nature 🌿', 'Creator 👨‍💻']
      });
      navigate('/blog/3');

    // 4. NATURE -> Opens Malagos Garden Resort post directly
    } else if (cleanKey.includes('nature') || cleanKey.includes('malagos')) {
      updatedMessages.push({
        sender: 'bot',
        text: 'Opening Malagos Garden Resort guide! 🌿',
        options: ['Beach 🏖️', 'Highlands ⛰️', 'Eco-Park 🌳', 'Creator 👨‍💻']
      });
      navigate('/blog/4');

    // 5. CREATOR -> Opens Creator Modal / About Page
    } else if (cleanKey.includes('creator') || cleanKey.includes('dev') || cleanKey.includes('darwin')) {
      updatedMessages.push({
        sender: 'bot',
        text: 'Opening Creator details for Darwin Albarido... 👨‍💻',
        options: ['Beach 🏖️', 'Highlands ⛰️', 'Eco-Park 🌳', 'Nature 🌿']
      });
      navigate('/about');
      if (onOpenDeveloperModal) onOpenDeveloperModal();

    // FALLBACK
    } else {
      updatedMessages.push({
        sender: 'bot',
        text: 'Try typing or clicking one of these keywords:',
        options: ['Beach 🏖️', 'Highlands ⛰️', 'Eco-Park 🌳', 'Nature 🌿', 'Creator 👨‍💻']
      });
    }

    setMessages(updatedMessages);
    setInputText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleKeywordSearch(inputText);
  };

  return (
    <div className="chatbot-floating-wrapper">
      {!isOpen ? (
        <button className="chatbot-toggle-btn" onClick={() => setIsOpen(true)}>
          💬 Assistant
        </button>
      ) : (
        <div className="chatbot-card">
          <div className="chatbot-header">
            <span><b>Travel Assistant</b></span>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`chatbot-msg-wrapper ${msg.sender}`}
              >
                <div className={`chatbot-msg-bubble ${msg.sender}`}>
                  {msg.text}
                </div>

                {msg.options && (
                  <div className="chatbot-options-box">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        className="chatbot-chip-btn"
                        onClick={() => handleKeywordSearch(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-area">
            <input
              type="text"
              placeholder="Type beach, buda, malagos, eden..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="chatbot-text-input"
            />
            <button type="submit" className="chatbot-send-btn">Go</button>
          </form>
        </div>
      )}
    </div>
  );
}