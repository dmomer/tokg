module.exports = function ( app ) {
  app.get( "/summary/:cid", routers.route.getRouteSummary );
  app.post( "/coordinate", routers.route.newCoordinate );
};