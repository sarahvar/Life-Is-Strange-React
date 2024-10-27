// src/components/MemoryGame.js
import React, { useContext } from 'react';
import { MemoryGameContext } from '../context/MemoryGameContext';
import './MemoryGame.css';

const MemoryGame = () => {
  const { cards, flippedCards, matchedCards, flipCard } = useContext(MemoryGameContext);

  return (
    <div className="memory-game">
      <h1>Jeu de Mémoire</h1>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''}`}
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
    </div>
  );
};

export default MemoryGame;

