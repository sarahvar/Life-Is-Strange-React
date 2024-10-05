import React from 'react';

const Result = ({ results, correctAnswers, totalQuestions, questions, onReset }) => {
  return (
    <div className="result-container">
      <h1>Résultats</h1>
      <p>Vous avez obtenu {correctAnswers} sur {totalQuestions} bonnes réponses.</p>
      <ul className="result-list">
        {questions.map((question, index) => {
          const result = results[index] || {}; // Trouver le résultat associé à l'index de la question
          return (
            <li
              key={index}
              className={result.correct ? 'correct-answer-item' : 'incorrect-answer'}
            >
              <h4>Question {index + 1}: {question.question}</h4>
              <p><strong>Réponse sélectionnée:</strong> {result.selected}</p>
              <p><strong>Réponse correcte:</strong> <span className="correct-answer">{result.correct_answer}</span></p>
            </li>
          );
        })}
      </ul>
      <div className="buttons">
        <button type="button" onClick={onReset}>Réinitialiser</button>
      </div>
    </div>
  );
};

export default Result;
