import { useEffect, useState } from 'react';
import './App.css';
import ChatInput from './ChatInput';
import ChatResponse from './ChatResponse'; // Import ChatResponse component
import { fetchChatResponse } from './services/api';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Save messages to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Function to handle question submission
  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, sender: 'user' },
    ]);

    try {
      // Simulate API call or response logic
      const apiResponse = await fetchChatResponse(question);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: apiResponse, sender: 'bot' },
      ]);
    } catch (error) {
      alert("An error occurred while fetching the response");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="App">
      <header>
        <h1>GeminiFlow</h1>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
        </button>
      </header>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {typeof message.text === 'string' ? message.text : <ChatResponse response={message.text} />}
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      <div className="chat-input-container">
        <ChatInput onSubmit={handleQuestionSubmit} />
      </div>
    </div>
  );
}

export default App;