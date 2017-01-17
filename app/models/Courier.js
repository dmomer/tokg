var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var CourierSchema = new Schema( {
  name        : {
    type    : String,
    required: true,
    unique  : true
  },
  lastLocation: []
}, { collection: "couriers", minimize: false } );

mongoose.model( 'Courier', CourierSchema );

module.exports = CourierSchema;
