var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  titulo: String,
  fecha: Date,
  foto: String,
  description: String,

 
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
