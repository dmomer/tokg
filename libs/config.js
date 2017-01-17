var nconf = require( "nconf" );
var fs    = require( "fs" );

global.$test = fs.existsSync( __dirname + "/../_test" );

(function () {
  console.info( "[TEST]", $test );
  try {
    var data = fs.readFileSync( "./config.json" );
    var json = JSON.parse( data );

    if ( process.env.NODE_ENV === "dev" ) {
      global.$config = json.env;
    }
  } catch ( e ) {
    console.error( e );
    process.exit( 0 );
  }
})();