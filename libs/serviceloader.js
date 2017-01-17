var utils = require( __dirname + "/utils" );

global.slo = {};

// include all controllers
(function () {
  utils.requireDirWithCallback( __dirname + "/../app/services/", function ( dir, name ) {
    slo[ name ] = require( dir );
  } );
  console.info( "[SERVICE]\tLOADED" );
})();
