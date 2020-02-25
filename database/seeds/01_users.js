const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'frodo', password: bcrypt.hashSync('pass', 8)},
        {username: 'gandolf', password: bcrypt.hashSync('youshallnotpass', 8)},
        {username: 'golum', password: bcrypt.hashSync('myprecious', 8)}
      ]);
    });
};
