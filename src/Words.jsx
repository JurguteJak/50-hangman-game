 export function getRandomWord() {
    const words = [
        'GAME', 'MOUSE', 'COMPUTER', 'STUDENT', 'TEACHER',
        'LESSON', 'WINNER', 'PAUSE', 'CLOCK', 'PAYER',
    ];
    return words[Math.floor(Math.random() * words.length)];
 }

export function writeWord(word) {
     return '_ '.repeat(word.length).trim();
 }



