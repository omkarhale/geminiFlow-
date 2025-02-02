import React, { useState } from "react";

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};

export default ChatInput;