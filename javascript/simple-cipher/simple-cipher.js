let Cipher = function (key) {
  if (key !== undefined && !key.match(/^[a-z]+$/)) throw new Error('Bad key');
  this.key = key || Cipher.key();
};

Cipher.key = function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let key = '';

  for (var i = 0; i < 100; i++) {
    key += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return key;
};

Cipher.prototype.encode = function (message) {
  let lowerString = message.toLowerCase();
  let newKey = '';

  if (lowerString.length > this.key.length) {
    newKey = this.key.repeat(Math.ceil(lowerString.length / this.key.length));
  } else {
    newKey = this.key;
  }

  let validEMessage = combineString(charCodeArray(lowerString, false), charCodeArray(newKey, true), false);

  return codeToString(validEMessage);
};

Cipher.prototype.decode = function (message) {
  let validDMessage = combineString(charCodeArray(message, false), charCodeArray(this.key, true), true);

  return codeToString(validDMessage);
};

const charCodeArray = (key, zeroBased) => {
  let num = zeroBased ? 97 : 0;
  return key.split('').map(function (char) { return char.charCodeAt() - num; });
};

const combineString = (messageArray, keyArray, toSubtract) => {
  return messageArray.map(function (char, i) {
    let combined = toSubtract ? char - keyArray[i] : char + keyArray[i];

    if (combined > 122) {
      combined -= 26;
    } else if (combined < 97) {
      combined += 26;
    }
    return combined;
  });
};

const codeToString = (codeMessage) => {
 return codeMessage.map(function (char) {
    return String.fromCharCode(char);
  }).join('');
};

module.exports = Cipher;