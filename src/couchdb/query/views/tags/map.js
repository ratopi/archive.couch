function ( doc )
{
	if ( "document" === doc.type && doc.tags )
	{
		doc.tags.forEach(
			function ( tag )
			{
				emit( tag, 1 );
			}
		)
	}
}
