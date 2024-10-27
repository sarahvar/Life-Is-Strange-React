import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

// Images du jeu (met tes propres images ici)
const images = [
  { id: 1, src: '/assets/Chloe-Price.jpg' },
  { id: 2, src: '/assets/Maxine-Caulfield.webp' },
  { id: 3, src: '/assets/Rachel-Amber.webp' },
  { id: 4, src: '/assets/Warren-Graham.webp' },
  { id: 5, src: '/assets/David-Madsen.jpg'},
  { id: 6, src: '/assets/Kate-Marsh.jpg' },
  { id: 7, src: '/assets/Frank-Bowers.webp' },
  { id: 8, src: '/assets/Joyce-Madsen.jpg' },
  { id: 9, src: '/assets/Nathan-Prescott.png' },
  { id: 10, src: '/assets/Victoria-Chase.webp' },
  { id: 1, src: '/assets/Chloe-Price.jpg' },
  { id: 2, src: '/assets/Maxine-Caulfield.webp' },
  { id: 3, src: '/assets/Rachel-Amber.webp' },
  { id: 4, src: '/assets/Warren-Graham.webp' },
  { id: 5, src: '/assets/David-Madsen.jpg'},
  { id: 6, src: '/assets/Kate-Marsh.jpg' },
  { id: 7, src: '/assets/Frank-Bowers.webp' },
  { id: 8, src: '/assets/Joyce-Madsen.jpg' },
  { id: 9, src: '/assets/Nathan-Prescott.png' },
  { id: 10, src: '/assets/Victoria-Chase.webp' },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Mélanger les cartes à chaque démarrage
  useEffect(() => {
    setCards(shuffleArray(images));
  }, []);

  // Fonction pour mélanger les cartes
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Retourner une carte
  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Vérifier si une paire est trouvée
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

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
}

export default MemoryGame;
