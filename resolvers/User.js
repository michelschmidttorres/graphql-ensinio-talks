const usersData = require('../data/users');

module.exports = {
  users: () => usersData.map(user => {
    return {
      id: user.id,
      name: user.display_name,
      photo: user.photo,
      biography: user.biography,
    }
  }),
  user: (_, args) => usersData
    .filter(user => user.id === args.id)
    .map(user => {
      return {
        id: user.id,
        name: user.display_name,
        photo: user.photo,
        biography: user.biography,
      }
    })[0],
};




