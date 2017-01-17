var express      = require( "express" );
var bodyParser   = require( "body-parser" );
var cookieParser = require( "cookie-parser" );
var cors         = require( "cors" );
var fs           = require( "fs" );
var routerLoader = require( "./router" );
var _u           = require( "./utils" );

var http = require( "http" );

var app    = express();
var router = express.Router();

global.$error = _u.dbErrorHandler;

function doHTTP ( app ) {
  var httpServer = http.createServer( app );
  httpServer.listen( $config.httpPort, function () {
    console.info( "[HTTP] listen " + $config.httpPort );
  } );
}

module.exports = function ( next ) {
  app.use( cors() );
  app.use( cookieParser() );
  app.use( bodyParser.json( {
    limit: "50mb"
  } ) );
  app.use( bodyParser.urlencoded( {
    limit   : "50mb",
    extended: true
  } ) );

  app.use( "/api/v1", router );
  routerLoader.loadv1( router );

  if ( $test ) doHTTP( app );

  next();
};
