module.exports = {
  getRouteSummary: function ( req, res ) {
    var cid = req.params.cid;

    slo.route.getRouteSummary( cid, function ( result ) {
      res.json( result );
    } );
  },
  newCoordinate  : function ( req, res ) {
    var cid  = req.body.courierId;
    var coor = req.body.coordinate;

    slo.route.putRouteToCourier( cid, coor, function ( result ) {
      res.json( result );
    } )
  }
};