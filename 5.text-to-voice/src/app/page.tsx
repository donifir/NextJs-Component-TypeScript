
'use client'
import React, { useState } from 'react'
import ReactTextToSpeech from 'react-text-to-speech'
import { HiVolumeUp } from 'react-text-to-speech/dist/icons'
import TextInput from'./components/TextInput'

const page = () => {
  const [speechSynthesis, setSpeechSynthesis] = useState<any>(window.speechSynthesis);

  const handleTextSubmit = (text:any) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      speechSynthesis.speak(utterance);
    } else {
      console.error('Web Speech API not supported in this browser.');
    }
  };
  return (
    <div>
    <h1>Text to Speech Converter</h1>
    <TextInput handleTextSubmit={handleTextSubmit} />
  </div>
  )
}

export default page