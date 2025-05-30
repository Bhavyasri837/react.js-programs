import React, { useState } from 'react';
import './App.css';
function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
      <center>
        <h1 className='h'>hello world!!!</h1>
        <a href="https://www.youtube.com">click me</a>
        <div className="emoji-display">
          {clicked ? '😆' : '🙂'}
        </div>
        <button className="emoji-button" onClick={handleClick}>
          Click me
        </button>
      </center>
      <ol start='a' type='a'>
        <li>hi</li>
        <li>hello</li>
        <li>how are you</li>
      </ol>
      <ul type='circle'>
        <li>good</li>
        <li>bad</li>
        <li>fruit</li>
      </ul>
    </div>
  );
}
export default App;
