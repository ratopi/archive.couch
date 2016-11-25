function ( oldDoc, req )
{
	if ( ! oldDoc )
	{
		return [
			null,
			{
				"json": {
					"error": "no doc given for update"
				}
			}
		]
	}

	// ---

	const data = JSON.parse( req.body );

	var newDoc = {};

	newDoc._id = oldDoc._id;

	newDoc.type = oldDoc.type;

	newDoc.uploaded = oldDoc.uploaded;
	newDoc.changed = new Date().getTime();

	if ( typeof data.attributes !== "undefined" )
	{
		newDoc.attributes = data.attributes;
	}

	if ( typeof data.tags !== "undefined" )
	{
		newDoc.tags = data.tags;
	}

	newDoc.history = oldDoc.history || [];
	newDoc.history.push( oldDoc );

	return [
		newDoc,
		{
			"json": {
				"ok": true,
				"id": newDoc._id
			}
		}
	];
}
