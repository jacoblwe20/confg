
var 
confg = require( '../index.js' ),
assert = require( 'assert' );

describe( 'confg', function () {
	describe( '#configuration()', function () {
		it( 
			'should set variables into process.env' + 
			' if value is a string', 
			function () {
				confg.configuration({
					HELLO : "WORLD"
				});
				assert.equal( "WORLD", process.env.HELLO )
			} 
		)
	} )
	describe( '#use()', function () {
		it( 
			'should load given file and apply' + 
			' the configuration to the process.env',
			 function () {
			 	confg.use( __dirname + '/config.js' );
			 	/* from ./config.js */
				assert.equal( "CAT", process.env.LAWLS )
			} 
		) 
	} )
	describe( '#init()', function () {
		it(
			'should initilize the config.js file' +
			' in the cwd',
			function () {
				confg.init();
				/* from /config.js */
				assert.equal( "5", process.env.FIVE )
			}
		)
	} )
} )
