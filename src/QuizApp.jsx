import React, { useState } from 'react';
import './QuizApp.css';

const QuizApp = () => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionNumber, selectedOption) => {
    setAnswers([...answers, { question: questionNumber, answer: selectedOption }]);
  };

  return (
    <div>
      <h1>React Quiz App</h1>

      <div>
        <p>Q1. What does HTML stand for?</p>
        <ul>
          <li onClick={() => handleAnswer(1, 'Hyper Text Markup Language')}>A) Hyper Text Markup Language</li>
          {/* ... other options */}
          <li> B) High-level Textual Modulation Language</li>
          < li> C) Hyperlink and Text Markup Language</li>
          <li>  D) Home Tool Markup Language</li>
        </ul>
      </div>
      <div>
        <p>Answer:</p>
        <ul>
          {answers.map((item, index) => (
            <><li> A) </li></>
            
                //</li><li key={index}>{`Q${item.question}: ${item.answer}`}</li></>
          ))}
        </ul>
      </div>

      {/* Repeat similar structure for other questions */}
      <div>
        <p>Q2. Which programming language is commonly used for building dynamic web pages? </p>
        <ul>
          <li onClick={() => handleAnswer(2, 'JavaScript')}>A)<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANode.js_logo.svg&psig=AOvVaw2uAIu7fHl2rZ9h16Rf5NiC&ust=1702041717386000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiC9dK1_YIDFQAAAAAdAAAAABAD" alt="Option A" /></li>
          {/* ... other options */}
          <li> B)  JavaScript</li>
          < li> C) Python</li>
          <li>  D) C#</li>
        </ul>
      </div>
      <div>
        <p>Answer:</p>
        <ul>
          {answers.map((item, index) => (
            <><li> B) </li></>
            //<li key={index}>{`Q${item.question}: ${item.answer}`}</li>
                //</li><li key={index}>{`Q${item.question}: ${item.answer}`}</li></>
          ))}
        </ul>
      </div>
      <div>
        <p>Q3. Which is known as the “SRIDHARACHARYA” formula.</p>
        <ul>
          <li onClick={() => handleAnswer(3, 'D')}>A)<img src="../images/node_img.png" alt="Option A" /> </li>
          {/* ... other options */}
          <li> B)<img src="images/node_img.png" alt="Option A" /></li>
          < li> C) <img src="images/node_img.png" alt="Option A" /></li>
          <li>  D) <img src="" alt="Option A" /></li>
        </ul>
      </div>
      <div>
      <div>
      <p>Answer:</p>
      <li>c)</li>

      </div>
        <p>Q4. What does CSS stand for?</p>
        <ul>
          <li onClick={() => handleAnswer(4, 'C')}>A) Computer Style Sheets</li>
          {/* ... other options */}
          <li> B) Creative Style Sheets</li>
          < li> C) Cascading Style Sheets</li>
          <li>  D) Colorful Style Sheets</li>
        </ul>
      </div>
      <div>
      <p>Answer:</p>
      <li>c)</li>

      </div>
      <div>
        <p>Q5. What is the purpose of the "alt" attribute in an HTML image tag?</p>
        <ul>
          <li onClick={() => handleAnswer(5, 'C')}>A) It defines the alignment of the image.</li>
          {/* ... other options */}
          <li> B) It specifies the image source URL.</li>
          < li> C) It provides alternative text for the image.</li>
          <li>  D) It sets the image border style.</li>
        </ul>
      </div>
      <div>
      <p>Answer:</p>
      <li>c)</li>

      </div>

      
    </div>
  );
};

export default QuizApp;
