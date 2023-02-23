const {
  addBooksHandler,
  gettingAllBooks,
  gettingIdBooks,
  editBookId,
  deleteBookId,
} = require('./handler');


const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: gettingAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: gettingIdBooks,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookId,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookId,
  },
];

module.exports = routes;
