'use strict';

function Book(text) {
  this.text = text;
  this.index = [];
  this.countWord = {};
  this.sortWord = [];
}

Book.prototype.getText = function () {
  return this.text = this.text.toLowerCase();
};

Book.prototype.arrayText = function () {
  return this.text.match(/(\b[^\s]+\b)/g);
};

Book.prototype.countWords = function () {
  var arrayText = this.arrayText();

  for (var i = 0; i < arrayText.length; i++) {
    var word = arrayText[i];
    if (this.countWord.hasOwnProperty(word)) {
      this.countWord[word] += 1;
    } else {
      this.countWord[word] = 1;
      this.index.push(word);
    }
  }

  return this.countWord;
};

Book.prototype.wordSorter = function () {
  var countWord = this.countWord;

  this.index.sort(function (a, b) {
    var CountA = countWord[a];
    var CountB = countWord[b];
    return CountB - CountA;
  });

  return this.index;
};

Book.prototype.printResults = function () {
  for (var i = 0; i < this.index.length; i++) {
    var word = this.index[i];

    if (this.primeNum(this.countWord[word])){
      this.sortWord.push(word + ' - ' + this.countWord[word] + ' prime');
    } else {
        this.sortWord.push(word + ' - ' + this.countWord[word]);
    }

  }


  return this.sortWord;
};

Book.prototype.primeNum = function (number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }

  return number > 1;
};

Book.prototype.Analyse = function () {
  this.getText();
  this.countOccurences();
  this.sortOccurences();
  console.log(this.printResults());
};

var fs = require('fs');

if (process.argv[2] === undefined) {
  console.log('Incorrect number of arguments. Suggested use: npm start book-file/Railway-Children-by-E-Nesbit.txt');
} else {
  var textFromBook = fs.readFileSync(process.argv[2], 'utf8');
  var book = new Book(textFromBook);
  book.Analyse();
}
