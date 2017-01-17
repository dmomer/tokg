var exports = module.exports = {};

var mongoose = require( "mongoose" );
var Courier  = mongoose.model( "Courier" );
var _u       = require( "./../../libs/utils" );

exports.loadDummyCourier = function ( callback ) {
  var _new = new Courier( {
    name: _u.randomString( 4 )
  } );

  _new.save( function ( err ) {
    if ( err ) {
      console.error( err );
      return;
    }

    console.log( "[DUMMY]\tDONE!" );
    callback();
  } );
};

exports.updateLastLocation = function ( cid, coor, callback ) {
  Courier.update( { _id: cid.toString() }, { $set: { lastLocation: coor } } )
    .exec()
    .then( function () {
      callback( null );
    } )
    .then( null, callback );
};

exports.getLastCoordinate = function ( cid, callback ) {
  Courier.findOne( { _id: cid.toString() } )
    .lean()
    .exec()
    .then( function ( courier ) {
      if ( !courier ) {
        console.error( "Courier not found id: " + cid );
        callback( {
          err: true,
          msg: "Courier not found."
        } );
        return;
      }

      callback( {
        err : false,
        data: courier.lastLocation
      } );
    } )
    .then( null, $error( callback ) );
};