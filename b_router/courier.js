module.exports = function ( app ) {
  app.get( "/courier/route/:cid", routers.courier.getLastCoordinate );
};