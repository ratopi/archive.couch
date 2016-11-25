function ( doc )
{
	if ( "document" === doc.type && doc.tags && ! doc.removed )
	{
		doc.tags.forEach(
			function ( tag )
			{
				emit( tag, 1 );
			}
		)
	}
}
