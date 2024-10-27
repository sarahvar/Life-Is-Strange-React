import React, { useContext } from 'react';
import { MemoryGameContext } from '../context/MemoryGameContext';
import './MemoryGame.css';

const MemoryGame = () => {
  const { 
    cards, 
    flippedCards, 
    matchedCards, 
    flipCard, 
    elapsedTime, 
    isGameComplete,
    resetGame 
  } = useContext(MemoryGameContext);

  return (
    <div className="memory-game">
      <div className="game-header">
        <h1>Jeu de Mémoire</h1>
        <div className="game-controls">
          <h2>Temps écoulé : {elapsedTime}</h2>
          <button 
            className="reset-button"
            onClick={resetGame}
          >
            Nouvelle partie
          </button>
        </div>
      </div>

      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''
            }`}
            onClick={() => flipCard(index)}
          >
            <div className="card-inner">
              <div className="card-front"></div>
              <div className="card-back">
                <img src={card.src} alt="Card" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {isGameComplete && (
        <div className="victory-message">
          <h2>Bravo, vous avez gagné en {elapsedTime}!</h2>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
