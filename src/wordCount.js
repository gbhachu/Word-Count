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
    this.sortWord.push(word + ' ' + this.countWord[word]);
  }

  return this.sortWord;
};
