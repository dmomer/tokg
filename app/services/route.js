var exports = module.exports = {};

var mongoose = require( "mongoose" );
var Route    = mongoose.model( "Route" );
var ObjectId = mongoose.Types.ObjectId;

exports.getRouteSummary = function ( courier_id, callback ) {
  var now  = new Date();
  var base = now.setDate( now.getDate() - 1 );

  Route.find( { $and: [ { courierId: ObjectId( courier_id ) }, { createdAt: { $gte: base } } ] } )
    .lean()
    .exec()
    .then( function ( routes ) {
      callback( {
        err : false,
        data: routes
      } );
    } )
    .then( null, $error( callback ) );
};

exports.putRouteToCourier = function ( courier_id, coor, callback ) {
  var _new = new Route( {
    courierId   : ObjectId( courier_id ),
    lastLocation: coor,
    createdAt   : Date.now()
  } );

  _new.save( function ( err ) {
    if ( err ) {
      console.error( err );
      callback( { err: true, msg: err.message() } );
      return;
    }

    slo.courier.updateLastLocation( courier_id, coor, function ( err ) {
      if ( err ) {
        console.log( err );
        return;
      }

      callback( { err: false, data: _new.toObject() } );
    } );
  } );
};