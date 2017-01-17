var utils      = require( __dirname + "/utils" );
global.giffMe  = utils.giffMe;
global.routers = {
  v2: {}
};

module.exports = {
  loadv1: function ( appv1 ) {
    utils.requireDirWithCallback( __dirname + "/../app/controllers/", function ( dir, name ) {
      routers[ name ] = require( dir );
    } );

    utils.requireDirWithCallback( __dirname + "/../b_router/", function ( dir ) {
      require( dir )( appv1 );
    } );
  }
};
