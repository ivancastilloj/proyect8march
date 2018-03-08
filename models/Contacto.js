var mongoose = require('mongoose');
var ContactoSchema = new mongoose.Schema({
pregunta: String,
  calendario: Date,
  mail: String,
 
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Contacto', ContactoSchema);