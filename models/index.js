const user = require('./user')
const comment = require('./comment')
const post = require('./post');

post.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

post.hasMany(comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

comment.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  user,
  comment,
  post
};
