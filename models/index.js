const user = require('./user')
const comment = require('./comment')
const post = require('./post');

post.belongsTo(user, {
  foreignKey: 'userId',
});

post.hasMany(comment, {
  foreignKey: 'postId',
});

comment.belongsTo(user, {
  foreignKey: 'userId', 
});

module.exports = {
  user,
  comment,
  post
};
