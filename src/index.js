const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split('**********');
  
    return words.map(word => {
      // Делим каждую часть на символы по 10 символов
      let letters = [];
      for (let i = 0; i < word.length; i += 10) {
        letters.push(word.slice(i, i + 10));
      }
      
      // Декодируем каждый символ Морзе в букву
      return letters.map(letter => {
        let morse = '';
        for (let i = 0; i < letter.length; i += 2) {
          if (letter[i] === '1' && letter[i + 1] === '0') morse += '.';
          if (letter[i] === '1' && letter[i + 1] === '1') morse += '-';
        }
        return MORSE_TABLE[morse];
      }).join('');
    }).join(' ');
}

module.exports = {
    decode
}