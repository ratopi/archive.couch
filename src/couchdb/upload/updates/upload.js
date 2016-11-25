function ( oldDoc, req )
{
	if ( oldDoc )
	{
		return [
			null,
			{
				"json": {
					"error": "doc is known"
				}
			}
		]
	}

	// ---

	var data = JSON.parse( req.body );

	var doc = {
		"_id": req.uuid,
		"type": "document",

		"uploaded": new Date().getTime(),

		"attributes": data.attributes,
		"tags": data.tags,

		"_attachments": {
			"document": {
				"data": data.document
			}
		}
	};

	return [
		doc,
		{
			"json": {
				"ok": true,
				"id": doc._id
			}
		}
	];
}
