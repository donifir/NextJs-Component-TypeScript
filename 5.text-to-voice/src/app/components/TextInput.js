import React, { useState } from 'react';

const TextInput = ({ handleTextSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTextSubmit(inputText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={inputText} onChange={handleChange} />
      <button type="submit">Convert to Speech</button>
    </form>
  );
};

export default TextInput;