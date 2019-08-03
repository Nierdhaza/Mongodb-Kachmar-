const { article } = require('../models');

module.exports = {createArticle}

function createArticle(req, res, next) {
    const payload = req.body;

    return articl.create({payload})
        .then(article => {
            res.status(201).json({
                result: article
            });
        })
        .catch(() => {
            res.status(500).json({
                message: "something went wrong"
            })
        });
}