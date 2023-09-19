import React, { Component } from "react";
import { randomWord } from "./Words";
import "../App.css";

import step0 from "./Images/state0.jpg";
import step1 from "./Images/state1.jpg";
import step2 from "./Images/state2.jpg";
import step3 from "./Images/state3.jpg";
import step4 from "./Images/state4.jpg";
import step5 from "./Images/state5.jpg";
import step6 from "./Images/state6.jpg";

class Game extends Component {
  // Prop variables
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
  };

  // State variables
  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]), // Initialize it as an empty array
      answer: randomWord(),
    };
  }

  // Function to return the letters of the word as _ or the actual letter depending if its found in the guessed variable or not.
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  //  Function for when the letter button is clicked
  // Sets and adds that letter to the guessed variable and increased the count of the mistake variable if the letter isnt found in the answer.
  handleGuess = (e) => {
    let letter = e.target.value;
    this.setState((state) => ({
      guessed: state.guessed.add(letter),
      mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1),
    }));
  };

  // Function to create the buttons for the letters
  // Map function is used to iterate trhough the string and print a button for each.
  // The key and value are set to the letter
  // Handleguess function is called onClick and the button is disabled is the letter is in the guessed variable
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {" "}
        {letter}
      </button>
    ));
  }

  // resets all the states to its default values, starting a new game
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]), // Initialize it as an empty array
      answer: randomWord(),
    });
  };

  // gameOver is set for when the mistakes are larger than the maxWrong value
  // isWinner is set for when the guessed word are equal to the answer
  // These are used in if statements to determine if the player has won or lost
  // Gamestat variable is used to call the generateButtons function
  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = <h1>You Won!!!</h1>;
    }

    if (gameOver) {
      gameStat = <h1>You Lost!!!</h1>;
    }

    // The images uses the props images array and uses the mistakes as a index for which image to display
    // hang-word - If the game is not over it uses the guessedWord function to display the word and if it is, the answer is shown
    return (
      <div className="game-container">
        <div className="Wrong-guess">
          <p>
            Word Guesses: {this.state.mistake} of {this.props.maxWrong}{" "}
          </p>
        </div>

        <div className="steps">
          <img
            src={this.props.images[this.state.mistake]}
            alt="hangman image"
          />
        </div>

        <div className="content">
          <h3>Guess the word:</h3>
          <h1 id="hang-word">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </h1>
        </div>

        <div className="game-stats">
          <p>{gameStat}</p>
        </div>

        <button className="reset-btn" onClick={this.resetButton}>
          Reset
        </button>
      </div>
    );
  }
}

export default Game;

//https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Function%20components.
//https://www.w3schools.com/react/react_class.asp
//https://www.youtube.com/watch?v=82-Gnw-rBiQ
//https://www.youtube.com/watch?v=jj0W8tYX_q8&t=404s
//https://www.youtube.com/watch?v=MwBO1HUEoR0
