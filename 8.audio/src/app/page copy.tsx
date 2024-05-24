'use client'
import React, { useEffect, useRef, useState } from 'react'


const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying(!isPlaying);
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {/* <audio controls>
        <source src="/imagine.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio> */}
      <div>
      <audio ref={audioRef} controls>
        <source src="/imagine.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
    </div>
  )
}

export default page