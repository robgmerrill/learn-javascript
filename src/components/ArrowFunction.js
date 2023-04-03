import { useState } from 'react';
import dynamic from 'next/dynamic';

const CodeEditor = dynamic(() => import('../components/CodeEditor'), {
  ssr: false,
});

const ArrowFunction = () => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
  
    const minLines = 5;
    const maxLines = 5;

    const handleSubmit = (e) => {
      e.preventDefault();
      const funcRegex = /^const\s+\w+\s*=\s*\(\s*\w+\s*,\s*\w+\s*\)\s*=>\s*(?:{\s*return\s*\w+\s*\+\s*\w+\s*;?\s*}|\w+\s*\+\s*\w+\s*)(?:;)?$/;
  
      if (funcRegex.test(code)) {
        setMessage('Congratulations, you completed the challenge!');
        setIsSuccess(true);
      } else {
        setMessage('Sorry, your code did not match the challenge.');
        setIsSuccess(false);
      }
    };
  
    return (
      <div>
        <h1>Exercise Two</h1>
        <p>Complete the function below to add two numbers using arrow function syntax.</p>
        <p>Function requirements:</p>
        <ul>
          <li>Function must be assigned to the variable <code>myFunction</code></li>
          <li>Function must take two parameters <code>a</code> and <code>b</code></li>
          <li>Function must use arrow function syntax</li>
          <li>Function must return the sum of <code>a</code> and <code>b</code></li>
        </ul>
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="code">Enter your code:</label>
          <br />
          <div style={{height: '200px'}}>
          <CodeEditor onChange={setCode} minLines={minLines} maxLines={maxLines} />

          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
  
        {message && (
          <div className={isSuccess ? 'success' : 'failure'}>
            {message}
          </div>
        )}
      </div>
    );
  };

export default ArrowFunction;
