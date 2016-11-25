function ( newDoc, oldDoc, userCtx, secObj )
{
	log( "=============================================" );

	log( "NEW" );
	log( JSON.stringify( newDoc, null, "\t" ) );

	log( "OLD" );
	log( JSON.stringify( oldDoc, null, "\t" ) );

	log( "=============================================" );

	if (oldDoc)
	{
		if ( oldDoc.type === "document" )
		{
			if ( newDoc._deleted )
			{
				throw({ "forbidden": "It is not allowed to delete documents" });
			}
		}

		if ( newDoc.type === "document" && oldDoc.type !== "document" )
		{
			throw({ "forbidden": "Document type of documents is not allowed to be changed." });
		}

		if ( newDoc.type !== "document" && oldDoc.type === "document" )
		{
			throw({ "forbidden": "Document type of documents is not allowed to be changed." });
		}

		// Check for change in document:
		if ( newDoc._attachments.document.digest !== oldDoc._attachments.document.digest )
		{
			throw({ "forbidden": "Document content is not allowed to be changed." });
		}
	}

}
