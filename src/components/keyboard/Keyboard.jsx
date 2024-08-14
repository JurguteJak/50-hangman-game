import style from './Keyboard.css';

export function Keyboard() {
    const alphabet = 'ABCDEFHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className={style.keyboardContainer}>
            <div className={style.keyboard}>{alphabet.map((letter) => 
            (<button key={letter} className={style.key}>{letter}</button>
            ))}
            </div>
        <div className="buttons">
            <button className={style.btn}>Give up</button>
            <button className={style.btn}>Start game</button>
        </div>
        </div>
    );
}