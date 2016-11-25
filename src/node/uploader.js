const doit =
	function ()
	{
		const log =
			function ( doc )
			{
				console.log( JSON.stringify( doc, null, "\t" ) );
			};

		const fs = require( "fs" );
		const process = require( "process" );

		const config = JSON.parse( fs.readFileSync( "./config.json" ) );

		const couchdb = require( "./mod/couchdb" ).connect( config.couchdb.url );

		const filename = process.argv[ 2 ];

		console.log( "will upload '" + filename + "'" );

		fs.readFile(
			filename,
			function ( err, buffer )
			{
				var doc = {
					"attributes": {},
					"tags": [],
					"document": buffer.toString( "base64" )
				};

				couchdb.post( "_design/upload/_update/upload", doc, log );
			}
		);
	};

doit();
