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
  let spaceDecryption = '**********'
  let arrayOfEncodedLetters = []
  let decryptedMessage = ''

  while (expr.length > 0) {
    arrayOfEncodedLetters.push(expr.substring(0,10));
    expr = expr.slice(10)
  }

  arrayOfEncodedLetters.forEach(item => {
    if(item === spaceDecryption){
      decryptedMessage += ' '
    } else {
      item = item.replace(/00/g,'').replace(/11/g,'-').replace(/10/g,'.');
      decryptedMessage += MORSE_TABLE[item];
    }
  })
  
  return decryptedMessage
}

module.exports = {
    decode
}