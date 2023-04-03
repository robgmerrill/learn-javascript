import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('../components/CodeEditor'), { ssr: false });

const Challenge = () => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const [showHint, setShowHint] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (code === 'const myVariable = 5;') {
        setMessage('Congratulations, you completed the challenge!');
        setIsSuccess(true);
      } else {
        setMessage('Sorry, your code did not match the challenge.');
        setIsSuccess(false);
      }
    };
  
    const handleHintClick = (e) => {
      e.preventDefault();
      setShowHint(true);
    };
  
    return (
      <div>
        <h1>Challenge: Create a const variable</h1>
        <p>Declare a const variable named &apos;myVariable&apos; and assign it the value 5.</p>
        <form onSubmit={handleSubmit}>
          <CodeEditor value={code} onChange={setCode} />
          <button type="submit">Submit</button>
        </form>
        {isSuccess === null ? null : isSuccess ? (
          <div style={{ color: 'green' }}>{message}</div>
        ) : (
          <>
            <div style={{ color: 'red' }}>{message}</div>
            <button onClick={handleHintClick}>Need a hint?</button>
            {showHint && (
              <div>
                <p>Remember, you need to use the &apos;const&apos; keyword to declare a constant variable.</p>
              </div>
            )}
          </>
        )}
      </div>
    );
  };
  
  

export default Challenge;
