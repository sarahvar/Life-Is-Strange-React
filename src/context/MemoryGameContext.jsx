// src/context/MemoryGameContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const MemoryGameContext = createContext();

// Composant fournisseur de contexte
export const MemoryGameProvider = ({ children }) => {
  const initialImages = [
    { id: 1, src: '/assets/Chloe-Price.jpg' },
    { id: 2, src: '/assets/Maxine-Caulfield.webp' },
    { id: 3, src: '/assets/Rachel-Amber.webp' },
    { id: 4, src: '/assets/Warren-Graham.webp' },
    { id: 5, src: '/assets/David-Madsen.jpg' },
    { id: 6, src: '/assets/Kate-Marsh.jpg' },
    { id: 7, src: '/assets/Frank-Bowers.webp' },
    { id: 8, src: '/assets/Joyce-Madsen.jpg' },
    { id: 9, src: '/assets/Nathan-Prescott.png' },
    { id: 10, src: '/assets/Victoria-Chase.webp' },
    { id: 1, src: '/assets/Chloe-Price.jpg' },
    { id: 2, src: '/assets/Maxine-Caulfield.webp' },
    { id: 3, src: '/assets/Rachel-Amber.webp' },
    { id: 4, src: '/assets/Warren-Graham.webp' },
    { id: 5, src: '/assets/David-Madsen.jpg' },
    { id: 6, src: '/assets/Kate-Marsh.jpg' },
    { id: 7, src: '/assets/Frank-Bowers.webp' },
    { id: 8, src: '/assets/Joyce-Madsen.jpg' },
    { id: 9, src: '/assets/Nathan-Prescott.png' },
    { id: 10, src: '/assets/Victoria-Chase.webp' },
  ];

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    setCards(shuffleArray(initialImages));
  }, []);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <MemoryGameContext.Provider value={{ cards, flippedCards, matchedCards, flipCard }}>
      {children}
    </MemoryGameContext.Provider>
  );
};
