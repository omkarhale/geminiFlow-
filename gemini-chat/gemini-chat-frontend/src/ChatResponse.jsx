import PropTypes from 'prop-types';
import React from 'react';

const ChatResponse = ({ response }) => {
  if (!response) {
    return null; // Render nothing if no response is provided
  }

  const { candidates, usagesMetadata } = response;

  return (
    <div>
      {candidates && candidates.map((candidate, index) => (
        <div className="chat-message bot" key={index}>
          {candidate.content?.parts[0].text.split('\n').map((line, idx) => (
            <p key={idx}>
              {line.replace(/\*\*\*/g, '*').replace(/\*\*(.*?)\*\*/g, '*$1*')}
            </p>
          ))}
        </div>
      ))}
      {usagesMetadata && (
        <div className="chat-message bot">
          <h4>Usages Metadata</h4>
          <p>Prompt Tokens: {usagesMetadata.promptTokenCount}</p>
          <p>ProResponse Tokens: {usagesMetadata.candidatesTokensCount}</p>
          <p>Total Tokens: {usagesMetadata.totalTokenCount}</p>
        </div>
      )}
    </div>
  );
};

ChatResponse.propTypes = {
  response: PropTypes.shape({
    candidates: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.shape({
          parts: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string,
            })
          ),
        }),
      })
    ),
    usagesMetadata: PropTypes.shape({
      promptTokenCount: PropTypes.number,
      candidatesTokensCount: PropTypes.number,
      totalTokenCount: PropTypes.number,
    }),
  }),
};

export default ChatResponse;