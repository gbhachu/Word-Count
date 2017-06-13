describe('wordCount', function () {
  var book;

  beforeEach(function () {
    book = new Book('Hello hello, how do you do? Hello to you too!');
  });

  describe('initialize', function ()  {
    it('no book exists', function () {
      expect(book.getText()).toEqual('hello hello, how do you do? hello to you too!');
    });
  });

  describe('arrayText', function () {
    it('inserts and separates the sample text into an array', function() {
      book.getText();
      expect(book.arrayText()).toEqual(['hello', 'hello', 'how', 'do', 'you', 'do', 'hello', 'to', 'you', 'too']);
    });
  });

  describe('countWords', function () {
     it('counts and indexes words given', function () {
       book.text = 'Hello hello, how do you do';
       book.getText();
       book.arrayText();
       expect(book.countWords()).toEqual({ hello: 2, how: 1, you: 1, do: 2 });
      });
    });
});
