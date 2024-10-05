import React from 'react';

const Quiz = ({ questions, onSubmit, responses, handleResponseChange }) => {
  return (
    <div className="quiz-container">
      <h1>Quiz Interactif</h1>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}>
        {questions.map((question, index) => (
          <div className="question" key={index}>
            <h3>{`Question ${index + 1}: ${question.question}`}</h3>
            <ul className="answers">
              {question.answers.map((answer, key) => (
                <li key={key}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={key}
                      checked={responses[index] === key}
                      onChange={() => handleResponseChange(index, key)}
                    />
                    {answer}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="buttons">
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
