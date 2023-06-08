import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Survey.module.css'; 

function Survey({ onSubmit, onBack, data }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { register, handleSubmit } = useForm({
    defaultValues: data
  });

  const questions = [
    { 
      questionId: 'q1',
      name: 'How do you view the balance between design aesthetics and sustainability in fashion?', 
      type: 'radio', 
      options: ['Design aesthetics are more important', 'Sustainability is more important', 'Both are equally important'] 
    },
    { 
      questionId: 'q2',
      name: 'Which of the following features of SXD do you find most useful? (Select all that apply)', 
      type: 'checkbox', 
      options: ['Zero waste patterns', 'Real-time size adjustments', 'Handling of curved patterns', 'PDF and DXF exports', 'Other'] 
    },
    { 
      questionId: 'q3',
      name: 'Are there any features you would like to see added or improved in the software?', 
      type: 'text' 
    },
    { 
      questionId: 'q4',
      name: 'After reviewing this project, would you hire me?', 
      type: 'radio', 
      options: ['Yes!', 'Definitely Yes!'] 
    },
    { 
      questionId: 'q5',
      name: 'How was your survey experience?', 
      type: 'text' 
    }
  ];  

  const handleNext = (data) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onSubmit(data);
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  }

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={styles.container}>
      {/* Progress bar */}
      <div style={{
        height: '20px',
        backgroundColor: '#ddd', // set a background color
        width: '40%', // limit the width
        margin: '0 auto', // center the bar
        position: 'relative', // relative positioning to place the percentage text
      }}>
        <div style={{
          height: '100%',
          width: `${progressPercentage}%`,
          backgroundColor: 'green'
        }} />
        <div style={{
          position: 'absolute', // absolute positioning to overlay the percentage text
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontWeight: 'bold'
        }}>
          {`${Math.round(progressPercentage)}%`}
        </div>
      </div>
      <h1 className={styles.surveyTitle}>Survey</h1>
      <form onSubmit={handleSubmit(handleNext)} className={styles.form}>
        {questions.map((question, index) => (
          <fieldset key={question.name} className={styles.question} style={{ display: index === currentQuestion ? 'block' : 'none' }}>
          <legend>{question.name}:</legend>
          {question.type === 'radio' && question.options.map(option => (
            <div key={option}>
              <label>
                <input type="radio" value={option} {...register(question.questionId)} />
                {option}
              </label>
            </div>
          ))}
          {question.type === 'checkbox' && question.options.map((option, optionIndex) => (
            <div key={option}>
              <label>
                <input type="checkbox" value={option} {...register(`${question.questionId}[${optionIndex}]`)} />
                {option}
              </label>
            </div>
          ))}
          {question.type === 'text' && (
            <div className={styles.whiteText}>
              <input type="text" {...register(question.questionId)} />
            </div>
          )}
        </fieldset>        
        ))}
        <div className={styles.buttons}>
          <button type="button" onClick={handleBack}>Back</button>
          <button type="submit">{currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default Survey;