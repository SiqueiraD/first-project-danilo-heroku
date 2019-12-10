var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var aguaSchema = new Schema({
   title: {
      type: String
   },
   nivel: Number,
   Created_date: {
      type: Date,
      default: Date.now
   }
});
module.exports = mongoose.model('Agua', aguaSchema);