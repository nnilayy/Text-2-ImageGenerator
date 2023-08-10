import axios from "axios";
import React, { useState } from 'react';
import TypingAnimation from './TypingAnimation';
import './App.css';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResponseData(null);
    setShowAnimation(false);

    const data = {
      prompt: prompt,
    };

    axios.post('http://127.0.0.1:8000/students/', data)
      .then(response => {
        setTimeout(() => {
          setResponseData(response.data);
          setIsLoading(false);
          setShowAnimation(true);
        }, 2000);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        {responseData !== null && (
          <div className={`response-box ${showAnimation ? 'show' : ''}`}>
            <p className="smolgpt-container">
              <p className="smolgpt">SmolGPT:</p>
              <br />

              {showAnimation ? (
                <TypingAnimation
                  text={`${responseData.prompt}`}
                  speed={50}
                  onComplete={() => setShowAnimation(false)}
                />
              ) : (
                <>
                  {responseData.prompt}
                </>
              )}
            </p>
          </div>
        )}

        {isLoading && (
          <div className="skeleton">
            <div className="small-rectangle r1"></div>
            <div className="small-rectangle"></div>
            <div className="small-rectangle"></div>
            <div className="small-rectangle"></div>
          </div>
        )}

        <div className="input-container">
          <input className="input" type="text" placeholder="Name" value={prompt} onChange={handlePromptChange} />
          <button className="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
