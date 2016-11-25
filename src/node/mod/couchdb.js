exports.connect =
	function ( dburl )
	{
		var request = require( "request" );

		console.log( "will connecting to couchdb on " + dburl.replace( /:[^:@]*@/, ":<PASSWORD>@" ) );

		return {
			"post": function ( url, o, fn )
			{
				request.post(
					{
						"headers": { "content-type": "application/json" },
						"url": dburl + url,
						"body": JSON.stringify( o )
					},
					function ( error, response, body )
					{
						if ( error )
						{
							fn( JSON.parse( error ), o );
						}
						else
						{
							fn( JSON.parse( body ), o );
						}
					}
				);
			}
		};
	};
