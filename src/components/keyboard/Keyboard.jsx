
import style from './Keyboard.module.css';

export function Keyboard({ handleGuess, startGame, gameStarted }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className={style.keyboardContainer}>
            <div className={style.keyboard}>
                {alphabet.map((letter) => (
                    <button 
                        key={letter} 
                        className={style.key}
                        onClick={() => handleGuess(letter)}                      
                        >{letter}
                    </button>
                ))}
            </div>
            <div className={style.buttons}>
                <button className={style.btn} onClick={startGame}>Start game</button> 
            </div>
        </div>
    );
};