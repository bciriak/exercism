let Pangram = function(sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  if (this.sentence === "") {
    return false;
  }

  let alph, sentenceLength;
  alph = alphabet();
  let isPang = true;

  // 1. "abcd hello"
  // 2. split the string
  let sentenceArray = this.sentence.split('');
  sentenceLength = sentenceArray.length;

  sentenceArray.map(function(char, i) {
    console.log(char);

    alph.map(function(alphLetter) {
      // console.log("char is: " + char + " and alphLetter is " + alphLetter);
      if (char === alphLetter) {
        // console.log("are we removing something");
        alph = alph.splice(i, 1);
      }
    });

    if (alph.length === 0) {
      return isPang = true;
    } else {
      return isPang = false;
    }
  });

  console.log(alph);

  return isPang;
  // NOTE: i need to examine each letter if it is in alphabet
  // 3. go over each letter check if it is in alphabet if yes remove it from alphabet array
  // 4. if alphabet is empty return true othervise false

};

// let arrayLengthChanged = (startLength, array) => {
//   if (startLength === array.length) {
//     return false;
//   }
//   return true;
// }

let alphabet = () => {
  const alphabet = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(i + 97));
  }
  return alphabet;
};

module.exports = Pangram;
