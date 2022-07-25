const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const gameRoutes = require('./game-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
