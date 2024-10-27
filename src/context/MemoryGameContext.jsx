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
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null); // Nouvel état pour suivre l'intervalle

  // Initialisation des cartes
  useEffect(() => {
    setCards(shuffleArray(initialImages));
  }, []);

  // Gestion du chronomètre
  useEffect(() => {
    if (isGameStarted && !isGameComplete) {
      const interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
      setTimerInterval(interval); // Sauvegarder la référence de l'intervalle
      
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    } else if (isGameComplete && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  }, [isGameStarted, isGameComplete]);

  // Vérification de fin de partie
  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setIsGameComplete(true);
    }
  }, [matchedCards, cards.length]);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    // Démarrer le jeu au premier clic
    if (!isGameStarted) {
      setIsGameStarted(true);
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedCards(prevMatched => [...prevMatched, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Ajouter une fonction pour réinitialiser le jeu
  const resetGame = () => {
    setCards(shuffleArray(initialImages));
    setFlippedCards([]);
    setMatchedCards([]);
    setElapsedTime(0);
    setIsGameStarted(false);
    setIsGameComplete(false);
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };

  return (
    <MemoryGameContext.Provider 
      value={{ 
        cards, 
        flippedCards, 
        matchedCards, 
        flipCard, 
        elapsedTime: formatTime(elapsedTime), 
        isGameComplete,
        resetGame 
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
};