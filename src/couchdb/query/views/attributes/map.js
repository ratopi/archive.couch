function ( doc )
{
	if ( "document" === doc.type && doc.attributes && ! doc.removed )
	{
		var k;
		for ( k in doc.attributes )
		{
			emit( k, doc.attributes[ k ] );
		}
	}
}
