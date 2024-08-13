import './Keyboard.css';

export function Keyboard() {
    const alphabet = 'ABCDEFHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="keyboardContainer">
            <div className="keyboard">{alphabet.map((letter) => 
            (<button key={letter} className="key">{letter}</button>
            ))}
            </div>
        <div className="buttons">
            <button className="btn">Give up</button>
            <button className="btn">Start game</button>
        </div>
        </div>
    );
}