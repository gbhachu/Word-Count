describe('book', function () {
  var book;

  beforeEach(function () {
    book = new Book('Hello world, it is a great day to be alive!!!');
  });

  describe('initialize', function ()  {
    it('no book exists', function () {
      expect(book.getText()).toEqual('Hello world, it is a great day to be alive!!!');
    });
  });

  describe('arrayText', function () {
    it('inserts and separates the sample text into an array', function() {
      expect(book.arrayText()).toEqual(['Hello', 'world', 'it', 'is', 'a', 'great', 'day', 'to', 'be', 'alive']);
    });
  });
});
