const User = require('./User');
const Book = require('./Book');
const Course = require('./Course');

module.exports = {
  Query: {
    ...User,  ...Book
  },
  ...Course
};