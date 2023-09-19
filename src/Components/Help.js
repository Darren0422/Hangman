import React, { useState } from 'react';

function DisplayHelp() {
  // Define a state variable to track whether the rules should be displayed
  const [showRules, setShowRules] = useState(false);

  // Function to toggle the visibility of the rules
  const toggleRules = () => {
    setShowRules(!showRules);
  };

  // When showrules is true, the text is displayed and when its not, it is hidden
  return (
    <div className='Help-container'>
      <div className='Help-content'>

        <button onClick={toggleRules}> Help </button>

        {showRules && (
          <div className='Help-textbox'>
              <h3>Rules:</h3>
              <p>The objective of Hangman is to guess the secret word correctly before you run out of attempts</p>
              <p>The secret word or phrase is represented by a row of underscores, with each underscore representing a letter in the word or phrase. </p>
              <p>If a player guesses a letter that is in the word or phrase, all instances of that letter are revealed in the display. </p>
              <p>If a player guesses a letter that is not in the word or phrase, a part of the hangman is drawn.</p>
              <p>You have 6 attempts.</p>
              <p>Goodluck!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayHelp;
