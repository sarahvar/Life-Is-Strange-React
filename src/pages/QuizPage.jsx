import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quiz from '../Quiz';
import Result from '../Result';
import { setResponses, setResults, resetQuiz } from '../redux/actions';
import './QuizPage.css';

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Liste des questions pour l'exemple
const initialQuestions = [
  {
    question: 'Quel est le nom complet de Max ?',
    answers: ['Maxine Caulfield', 'Max Caulfield', 'Maxine Carter', 'Max Carter'],
    correct: 0
  },
  {
    question: 'Quel est le super pouvoir de Max ?',
    answers: ['Télékinésie', 'Voyage dans le temps', 'Télépathie', 'Invisibilité'],
    correct: 1
  },
  {
    question: 'Quel est le nom de l\'amie d\'enfance de Max ?',
    answers: ['Rachel Amber', 'Victoria Chase', 'Kate Marsh', 'Chloé Price'],
    correct: 3
  },
  {
    question: 'Quel est le nom de l\'école que Max fréquente ?',
    answers: ['Arcadia Bay School', 'Pacific Northwest School', 'Blackwell Academy', 'West Coast Academy'],
    correct: 2
  },
  {
    question: 'Comment s\'appelle la ville où se déroule l\'histoire ?',
    answers: ['Arcadia Bay', 'Bright Falls', 'Twin Peaks', 'Silent Hill'],
    correct: 0
  },
  {
    question: 'Quelle est la passion artistique de Max ?',
    answers: ['Peinture', 'Photographie', 'Écriture', 'Musique'],
    correct: 1
  },
  {
    question: 'Quelle est la principale cause des conflits entre Max et Chloé ?',
    answers: ['Le déménagement de Max', 'Les secrets de Chloé', 'La disparition de Rachel', 'Les relations amoureuses'],
    correct: 0
  },
  {
    question: 'Qui est le principal antagoniste de "Life Is Strange" ?',
    answers: ['Nathan Prescott', 'Mark Jefferson', 'David Madsen', 'Frank Bowers'],
    correct: 1
  },
  {
    question: 'Quel est le nom de la mère de Max ?',
    answers: ['Joyce', 'Diana', 'Sarah', 'Vanessa'],
    correct: 3
  },
  {
    question: 'Qui est le beau-père de Chloé ?',
    answers: ['Proviseur Wells', 'Mark Jefferson', 'David Madsen', 'Sean Prescott'],
    correct: 2
  }
];

const QuizPage = () => {
  const dispatch = useDispatch();
  const quizState = useSelector(state => state.quiz);

  // Conserver l'ordre des questions mélangées
  const [questions, setQuestions] = useState(() => {
    const savedQuestionsOrder = sessionStorage.getItem('questionsOrder');
    if (savedQuestionsOrder) {
      return JSON.parse(savedQuestionsOrder);
    } else {
      const shuffledQuestions = shuffleArray([...initialQuestions]);
      sessionStorage.setItem('questionsOrder', JSON.stringify(shuffledQuestions));
      return shuffledQuestions;
    }
  });
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const savedResponses = sessionStorage.getItem('quizResponses');
    const savedResults = sessionStorage.getItem('quizResults');
    const savedCorrectAnswers = sessionStorage.getItem('correctAnswers');
    const savedShowResults = sessionStorage.getItem('showResults') === 'true';

    if (savedResponses) {
      dispatch(setResponses(JSON.parse(savedResponses)));
    }
    
    if (savedResults && savedCorrectAnswers) {
      dispatch(setResults(JSON.parse(savedResults), parseInt(savedCorrectAnswers)));
      setShowResults(savedShowResults);
    }
  }, [dispatch]);

  const handleResponseChange = (index, answer) => {
    const newResponses = {
      ...quizState.responses,
      [index]: answer
    };
    dispatch(setResponses(newResponses));
    sessionStorage.setItem('quizResponses', JSON.stringify(newResponses));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    const result = questions.map((question, index) => {
      const selectedAnswer = quizState.responses[index];
      const originalIndex = initialQuestions.findIndex(q => q.question === question.question);
      const correctAnswerIndex = originalIndex !== -1 ? initialQuestions[originalIndex].correct : -1;

      if (selectedAnswer === correctAnswerIndex) {
        correctCount++;
        return {
          correct: true,
          selected: question.answers[selectedAnswer],
          correct_answer: question.answers[correctAnswerIndex]
        };
      } else {
        return {
          correct: false,
          selected: selectedAnswer !== undefined ? question.answers[selectedAnswer] : 'Aucune réponse',
          correct_answer: correctAnswerIndex !== -1 ? question.answers[correctAnswerIndex] : 'Inconnu'
        };
      }
    });

    dispatch(setResults(result, correctCount));
    sessionStorage.setItem('quizResults', JSON.stringify(result));
    sessionStorage.setItem('correctAnswers', correctCount);
    sessionStorage.setItem('showResults', 'true');
    setShowResults(true);
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    sessionStorage.removeItem('quizResponses');
    sessionStorage.removeItem('quizResults');
    sessionStorage.removeItem('correctAnswers');
    sessionStorage.removeItem('showResults');
    const shuffledQuestions = shuffleArray([...initialQuestions]);
    setQuestions(shuffledQuestions);
    sessionStorage.setItem('questionsOrder', JSON.stringify(shuffledQuestions));
    setShowResults(false);
  };

  return (
    <div>
      {/* Message d'information pour certains navigateurs */}
      <div className="info-message">
        <p><strong>Info :</strong> Sur certains navigateurs (comme Brave, Safari et Internet Explorer), placez votre curseur sur le texte, pas sur le rond, pour sélectionner votre réponse.</p>
      </div>

      {!showResults ? (
        <Quiz
          questions={questions}
          onSubmit={handleSubmit}
          responses={quizState.responses}
          handleResponseChange={handleResponseChange}
        />
      ) : (
        <Result
          results={quizState.results}
          correctAnswers={quizState.correctAnswers}
          totalQuestions={initialQuestions.length}
          questions={questions} // Passer les questions dans l'ordre mélangé au Result
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default QuizPage;
