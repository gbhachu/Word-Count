describe('book', function () {
  var book;

  beforeEach(function () {
    book = new Book('Hello world, it is a great day to be alive!!!');
  });

  it('no book exists', function () {
    expect(book.getText()).toEqual('Hello world, it is a great day to be alive!!!');
  });

});
