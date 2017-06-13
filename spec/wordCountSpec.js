describe('Book', function () {
  var book;
  beforeEach(function () {
    book = new Book("Hello hello, how do you do. Hello to you too!");
  });

  describe('getText', function () {
    it('book text to lowercase', function () {
      expect(book.getText()).toEqual("hello hello, how do you do. hello to you too!");
    });
  });

  describe('arrayText', function () {
    it('inserts and separates the sample text into an array', function () {
      book.getText();
      expect(book.arrayText()).toEqual(['hello', "hello", 'how', 'do', 'you', 'do', 'hello', 'to', 'you', 'too']);
    });
  });

  describe('countWords', function () {
    it('counts word re-currence', function () {
      book.getText();
      book.arrayText();
      expect(book.countWords()).toEqual({ hello: 3, how: 1, do: 2, you: 2, to: 1, too: 1 });
    });
  });

  describe('wordSorter', function () {
    it('sorts word by times appears in text', function () {
      book.getText();
      book.arrayText();
      book.countWords();
      expect(book.wordSorter()).toEqual(['hello', 'do', "you", 'how', 'to', 'too']);
    });
  });

  describe('printResults', function () {
    it('prints the output with number of times word appears', function () {
      book.getText();
      book.arrayText();
      book.countWords();
      book.wordSorter();
      expect(book.printResults()).toEqual(['hello 3', 'do 2', "you 2", 'how 1', 'to 1', 'too 1']);
    });
  });
});
