const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    description: {type:Schema.Types.String},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Articls', ArticleSchema);