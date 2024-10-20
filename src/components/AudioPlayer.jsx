import React, { useState, useRef } from 'react';
import './AudioPlayer.css'; // Importez le fichier CSS spécifique à la musique

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        // Pause the audio
        audioRef.current.pause();
      } else {
        // Play the audio
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(prev => !prev); // Toggle the playing state
    }
  };

  return (
    <div>
      {/* Balise audio */}
      <audio ref={audioRef} loop>
      <source src="/assets/life-is-strange-soundtrack.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas la balise audio.
      </audio>
      
      {/* Bouton pour démarrer/arrêter la musique */}
      <div id="music-controls">
        {isPlaying ? (
          <button onClick={togglePlay} id="stop-music">Arrêter la musique</button>
        ) : (
          <button onClick={togglePlay} id="play-message">Cliquez ici pour démarrer la musique</button>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
