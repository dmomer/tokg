module.exports = {
  getLastCoordinate: function ( req, res ) {
    var cid = req.params.cid;

    slo.courier.getLastCoordinate( cid, function ( result ) {
      res.json( result );
    } )
  }
};