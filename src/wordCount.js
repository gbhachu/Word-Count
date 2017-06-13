'use strict';

function Book(text) {
  this.text = text;
  this.index = [];
}

Book.prototype.getText = function () {
  return this.text = this.text.toLowerCase();
};

Book.prototype.arrayText = function () {
  this.index = this.text.match(/(\b[^\s]+\b)/g);
  return this.index;
};

Book.prototype.countWords = function () {
  var Counter = {};

  for (var i = 0; i < this.index.length; i++) {
    var word = this.index[i];
    if (Counter.hasOwnProperty(word)) {
      Counter[word] += 1;
    } else {
      Counter[word] = 1;
    }
  }

  return Counter;
};
