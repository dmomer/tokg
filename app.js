var async = require( "async" );

//PRE LOADERS
require( "./libs/config" );

//ASYNC FUNCTIONS
function upDB ( next ) {
  require( __dirname + "/libs/db" )( next );
}

function upExpress ( next ) {
  require( __dirname + "/libs/express" )( next );
}

function upServices ( next ) {
  require( "./libs/serviceloader" );
  slo.courier.loadDummyCourier( next );
}

global.$uptime = new Date().getTime();

async.waterfall( [
  upDB,
  upServices,
  upExpress
], function ( err ) {
  if ( err ) {
    console.error( err );
    process.exit( 0 );
  }
  console.info( "[APP]", "ready", (new Date().getTime() - $uptime) / 1000 );
} );