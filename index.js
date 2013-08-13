var 
cwd = process.cwd( ),
path = require( 'path' );

/** # confg
  */


var confg = module.exports = {

	/** ### confg._getFile
	  *
	  * @param {String} filename file name for the config file
	  */

	_getFile: function ( filename ) {
		if ( confg._isValidFile( filename ) ) {
			var fn = require( filename );
			if ( 'function' === typeof fn ){
				fn( confg );
			}
		}
	},

	/** ### confg._isValidFile
	  *
	  * @param {String} filename file name for the config file
	  * @returns {Boolean} boolean if file exsist
	  */

	_isValidFile: function ( filename ) { 
		return path.exsistSync( filename );
	},

	/** ### confg.configuration
	  *
	  * @param {Object} obj an object to extend the Enviroment variable
	  */

	configuration: function( obj ){
		if ( 'object' === typeof obj ) {
			for( var key in obj ) {
				var value = obj[ key ];
				if ( 'string' === typeof value ) {
					process.env[ key ] = value;
				}
			}
		}
	},

	/** ### confg.use
	  *
	  * @param {String} filename file name for the config file
	  */

	use: function( ) {
		confg._getFile.apply( null, arguments );
	}
};

confg.use( cwd + '/config.js');