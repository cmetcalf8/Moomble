const User = require('./User');
const Restaurant = require('./Restaurant');

User.hasMany(Restaurant, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Restaurant.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Restaurant };