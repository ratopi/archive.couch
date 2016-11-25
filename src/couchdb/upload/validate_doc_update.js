function ( newDoc, oldDoc, userCtx, secObj )
{
	log( "=============================================" );

	log( "NEW" );
	log( JSON.stringify( newDoc, null, "\t" ) );

	log( "OLD" );
	log( JSON.stringify( oldDoc, null, "\t" ) );

	log( "=============================================" );

	const isDocumentDoc =
		function ( doc )
		{
			return doc.type === "document";
		};

	// check for changes in doc
	if ( oldDoc )
	{
		if ( isDocumentDoc( oldDoc ) )
		{
			if ( newDoc._deleted )
			{
				throw({ "forbidden": "It is not allowed to delete documents" });
			}

			if ( ! isDocumentDoc( newDoc ) )
			{
				throw({ "forbidden": "Document type of documents is not allowed to be changed." });
			}
		}

		if ( isDocumentDoc( newDoc ) )
		{
			if ( ! isDocumentDoc( oldDoc ) )
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

	if ( isDocumentDoc( newDoc ) )
	{
		// TODO: check attributes in new document
	}

}
