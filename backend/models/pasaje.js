const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const {Schema} = mongoose;

const PasajeSchema = new Schema({
  dni: {type:Number, required:true},
  precio: {type:Number, required:true},
  categoria: {type:String, required:true},
  adelanto: {type:Schema.Types.ObjectId, ref:Adelanto, required:true}
})

module.exports = mongoose.model('Pasaje', PasajeSchema);