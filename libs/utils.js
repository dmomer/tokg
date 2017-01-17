var fs = require( "fs" );

module.exports = {
  "requireDirWithCallback": function ( dir, callback ) {
    var ext = ".js";
    fs.readdirSync( dir ).forEach( function ( file ) {
      if ( file.indexOf( ext ) !== -1 ) {
        var name = file.substring( 0, file.length - ext.length );
        callback( dir + name, name );
      }
    } );
  },
  "dbErrorHandler"        : function ( callback ) {
    return function ( err ) {
      console.error( err );
      callback( {
        err: true,
        msg: err.toString()
      } );
    };
  },
  "randomString"          : function ( length ) {
    if ( !length ) length = 12;
    var s   = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var arr = new Array( length );
    return arr.join()
      .split( ',' )
      .map( function () {
        return s.charAt( Math.floor( Math.random() * s.length ) );
      } )
      .join( '' );
  }
};
