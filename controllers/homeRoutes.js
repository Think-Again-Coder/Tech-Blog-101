const router = require('express').Router();
const sequelize = require('../config/connection');
const {post, user, comment } = require('../models');
//need to include the main routes for posts, comments, and user.

// router.get('/', (req, res) => {
//     post.findAll({
//         attributes: [
//             'title',
//             'id',
//             'postMessage'
//         ],
//         include: [{
//             model: comment,
//             attributes: [
//                 'postId', 
//                 'userId'
//             ],
//              //left off here for Get route ...
//         }
//         ]
//     })
// });

// module.exports = router;