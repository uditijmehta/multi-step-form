import React from 'react';
import styles from './Confirmation.module.css';  // assuming the CSS file is in the same directory

function Confirmation({ onBack, onSubmit, data }) {
  const handleGoBack = () => {
    onBack();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirm Your Details</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>How do you view the balance between design aesthetics and sustainability in fashion? <br /> Ans: {data.q1}</p>
      <p>Which of the following features of SXD do you find most useful? (Select all that apply) <br /> Ans: {Array.isArray(data.q2) ? data.q2.join(', ') : data.q2}</p>
      <p>Are there any features you would like to see added or improved in the software? <br /> Ans: {data.q3}</p>
      <p>After reviewing this project, would you hire me? <br /> Ans: {data.q4}</p>
      <p>How was your survey experience? <br /> Ans: {data.q5}</p>
      <div className={styles.buttons}>
        <button onClick={handleGoBack}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Confirmation;

