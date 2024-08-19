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

  const startGame = () => {
    const randomWord = getRandomWord();
    setWord(randomWord);
    setHiddenWord(writeWord(randomWord));
    setLives(6);
    setGuessWord([]);
  };

  const handleGuess = (letter) => {
    if (guessWord.includes(letter))
      return;
  

  setGuessWord([...guessWord, letter]);

  if(word.includes(letter)) {
    let updateHiddenWord = '';
    for(let i=0; i <word.length; i++) {
      updateHiddenWord += guessWord.includes(word[i]) || word[i] === letter ? word[i] : '_ ';
    }
    setHiddenWord(updateHiddenWord.trim());
  } else {
    setLives(lives -1);
  }
};

let currentImage;
if(lives === 5) {
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
};

    return (
            <div className={style.hangmanContainer}>
            <h1>Hangman game</h1>
            <div>
              <div className={style.lives}>Lives: {lives}</div>
              <img className={style.foto} src={currentImage} alt="foto" />
            </div>
            <div className={style.hidden}>{hiddenWord}</div>
            
            <Keyboard guessWord={guessWord} handleGuess={handleGuess} startGame={startGame} />
            
          </div>
    );
}