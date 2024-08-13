// import foto from '/foto1.png';

export function Hangman (){

    return (
            <div className="hangmanContainer">
            <h1>Hangman game</h1>
            <div>
              <img className="foto" src={foto} alt="foto" />
            </div>
            <div>WORDS</div>
            <div>Lives</div>
          </div>
    )
};