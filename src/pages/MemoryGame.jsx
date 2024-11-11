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
    resetGame, 
    difficulty, 
    setDifficulty,
    formatTime // Importer la fonction de formatage du temps
  } = useContext(MemoryGameContext);

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    resetGame(); // Redémarre le jeu avec la nouvelle difficulté
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <h1>Jeu de Mémoire</h1>
        <div className="game-controls">
          <h2>Temps écoulé : {formatTime(elapsedTime)}</h2> {/* Appliquer formatTime ici */}
          <button className="reset-button" onClick={resetGame}>
            Nouvelle partie
          </button>
          <div className="difficulty-buttons">
            <button 
              className={difficulty === 'easy' ? 'selected active' : ''} 
              onClick={() => handleDifficultyChange('easy')}
            >
              Facile
            </button>
            <button 
              className={difficulty === 'medium' ? 'selected active' : ''} 
              onClick={() => handleDifficultyChange('medium')}
            >
              Moyen
            </button>
            <button 
              className={difficulty === 'hard' ? 'selected active' : ''} 
              onClick={() => handleDifficultyChange('hard')}
            >
              Difficile
            </button>
          </div>
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
          <h2>Bravo, vous avez gagné en {formatTime(elapsedTime)}!</h2> {/* Appliquer formatTime ici aussi */}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
