var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var RouteSchema = new Schema( {
  createdAt   : { type: Number, default: Date.now },
  lastLocation: [],
  courierId   : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Courier"
  }
}, { collection: "routes", minimize: false } );

mongoose.model( 'Route', RouteSchema );

module.exports = RouteSchema;
