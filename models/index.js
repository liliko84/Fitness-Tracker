// import other models
const exercise = require('../exercise');
const stats = require('../stats');

//Add sequelize hasmany and belongsto
// connect (associate) models
User.hasMany(Books, {
  onDelete: 'CASCADE'
});

// this will create a column in Post table called 'UserId'
Books.belongsTo(User);


module.exports = { Books, User };