const userRoutes = require('./user.route');
const article = require('./article.route');
const express = require('express');
const router = express.Router();

router.use('/user', userRoutes);
router.use('/article', article);

module.exports = router;
