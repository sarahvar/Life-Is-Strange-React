import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const MemoryGameContext = createContext();

// Composant fournisseur de contexte
export const MemoryGameProvider = ({ children }) => {
  // Jeux d'images par difficulté
  const easyImages = [
    { id: 1, src: '/assets/Chloe-Price.jpg' },
    { id: 2, src: '/assets/Maxine-Caulfield.webp' },
    { id: 3, src: '/assets/Rachel-Amber.webp' },
    { id: 4, src: '/assets/Warren-Graham.webp' },
    { id: 5, src: '/assets/David-Madsen.jpg' },
    { id: 6, src: '/assets/William-Price.png' },
    { id: 7, src: '/assets/Kate-Marsh.jpg' },

  ];

  const mediumImages = [
    ...easyImages,
    { id: 8, src: '/assets/Frank-Bowers.webp' },
    { id: 9, src: '/assets/Joyce-Madsen.jpg' },
    { id: 10, src: '/assets/Victoria-Chase.webp' },
  ];

  const hardImages = [
    ...mediumImages,
    { id: 11, src: '/assets/Nathan-Prescott.png' },
    { id: 12, src: '/assets/Vanessa-Caulfield.webp' },
    { id: 13, src: '/assets/Mark_jefferson.webp' },
    { id: 14, src: '/assets/Rayan-Caufield.png'},
  ];
  
  const [difficulty, setDifficulty] = useState('easy'); // Difficulté par défaut à 'easy'
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Initialisation des cartes en fonction de la difficulté
  useEffect(() => {
    let selectedImages = [];
    if (difficulty === 'easy') selectedImages = easyImages;
    else if (difficulty === 'medium') selectedImages = mediumImages;
    else selectedImages = hardImages;

    const doubledImages = [...selectedImages, ...selectedImages]; // Duplique les cartes pour les paires
    setCards(shuffleArray(doubledImages));
  }, [difficulty]);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

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

  const flipCard = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    // Démarrer le jeu et le chronomètre au premier clic
    if (!isGameStarted) {
      setIsGameStarted(true);
      setElapsedTime(0); // Réinitialiser le temps écoulé
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].id === cards[secondIndex].id) {
        setMatchedCards((prevMatched) => [...prevMatched, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  // Fonction pour réinitialiser le jeu
  const resetGame = () => {
    setIsGameStarted(false);
    setIsGameComplete(false);
    setElapsedTime(0);
    setFlippedCards([]);
    setMatchedCards([]);

    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }

    let selectedImages = [];
    if (difficulty === 'easy') selectedImages = easyImages;
    else if (difficulty === 'medium') selectedImages = mediumImages;
    else selectedImages = hardImages;

    const doubledImages = [...selectedImages, ...selectedImages];
    setCards(shuffleArray(doubledImages));
  };

  return (
    <MemoryGameContext.Provider
      value={{
        cards,
        flippedCards,
        matchedCards,
        flipCard,
        elapsedTime,
        isGameComplete,
        resetGame,
        difficulty,
        setDifficulty, // Permet de changer la difficulté depuis un autre composant
        formatTime, // Permet d'utiliser la fonction de formatage du temps
      }}
    >
      {children}
    </MemoryGameContext.Provider>
  );
};
