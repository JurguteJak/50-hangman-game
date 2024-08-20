import foto from '/foto1.png';
import foto2 from '/foto2.png';
import foto3 from '/foto3.png';
import foto4 from '/foto4.png';
import foto5 from '/foto5.png';
import foto6 from '/foto6.png';
import fullFoto from '/fullFoto.png';
import style from './Hangman.module.css';
import { useState } from 'react';
import { getRandomWord, writeWord } from '../../Words';
import { Keyboard } from '../keyboard/Keyboard';

export function Hangman() {
  const [word, setWord] = useState('');
  const [hiddenWord, setHiddenWord] = useState('');
  const [lives, setLives] = useState(6);
  const [guessWord, setGuessWord] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    const randomWord = getRandomWord();
    setWord(randomWord);
    setHiddenWord(writeWord(randomWord));
    setLives(6);
    setGuessWord([]);
    setGameStarted(true);
  };

  const handleGuess = (letter) => {
    if (!gameStarted) return;
    
    if (guessWord.includes(letter)) return;

    setGuessWord([...guessWord, letter]);

    if (word.includes(letter)) {
      let updateHiddenWord = '';
      for (let i = 0; i < word.length; i++) {
        updateHiddenWord += guessWord.includes(word[i]) || word[i] === letter ? word[i] : '_ ';
      }
      setHiddenWord(updateHiddenWord.trim());
    } else {
      setLives(lives - 1);
    }
  };

  const isWordGuessed = !hiddenWord.includes('_');
  let currentImage;

  if (lives === 6) {
    currentImage = foto;
  } else if (lives === 5) {
    currentImage = foto2;
  } else if (lives === 4) {
    currentImage = foto3;
  } else if (lives === 3) {
    currentImage = foto4;
  } else if (lives === 2) {
    currentImage = foto5;
  } else if (lives === 1) {
    currentImage = foto6;
  } else if (lives === 0) {
    currentImage = fullFoto;
  }

  if (!gameStarted) {
    return (
      <div className={style.hangmanContainer}>
        <h1 className={style.game}>Hangman game</h1>
        <button className={style.startButton} onClick={startGame}>Start Game</button>
      </div>
    );
  }

  if (lives === 0) {
    return (
      <div className={style.hangmanContainer}>
        <h2>Game Over</h2>
        <img className={style.foto} src={fullFoto} alt="foto" />
        <button className={style.btn} onClick={startGame}>Start Game</button>
      </div>
    );
  }

  if (isWordGuessed) {
    return (
      <div className={style.hangmanContainer}>
        <h>You Win !!!!!</h2>
        <button className={style.btn} onClick={startGame}>Start Game</button>
      </div>
    );
  }

  return (
    <div className={style.hangmanContainer}>
      <h1>Hangman game</h1>
      <div>
        <div className={style.lives}>Lives: {lives}</div>
        <img className={style.foto} src={currentImage} alt="foto" />
      </div>
      <div className={style.hidden}>{hiddenWord}</div>
      <Keyboard handleGuess={handleGuess} startGame={startGame} gameStarted={gameStarted} />
    </div>
  );
}