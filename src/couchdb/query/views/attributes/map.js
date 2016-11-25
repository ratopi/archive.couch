function ( doc )
{
	if ( "document" === doc.type && doc.attributes )
	{
		var k;
		for ( k in doc.attributes )
		{
			emit( k, doc.attributes[ k ] );
		}
	}
}
