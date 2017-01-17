var mongoose = require( "mongoose" );
var fs       = require( "fs" );

module.exports = function ( next ) {
  mongoose.connect( $config.DB );

  mongoose.connection.on( "error", function ( err ) {
    console.error( "[DB] error:", err.message );
  } );

  mongoose.connection.on( "disconnected", function () {
    console.info( "[DB] down." );
  } );

  mongoose.connection.on( "connected", function () {
    console.info( "[DB] up with", (process.env.NODE_ENV === "dev") ? "(dev)" : "(production)" );

    fs.readdirSync( __dirname + "/../app/models" ).forEach( function ( file ) {
      if ( file.indexOf( ".js" ) !== -1 ) {
        require( __dirname + "/../app/models/" + file );
      }
    } );

    next();
  } );
};
