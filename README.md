### Confg

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/confg.svg)](https://greenkeeper.io/)

Configurable enviroment with a js file.

```shell
npm install confg
```

#### Use

By default _confg_ uses `config.js` in the root directory. This is eg. of config file. 

##### config.js

```javascript
var pkg = require('package.json');

module.exports = function( confg ){

	confg.configuration({
		APPSECRET: '2323O3IM4OIGM3OIM',
		VERSION: pkg.version,
		APPSTARTUP: ( +new Date() ) + ''
	});
};
```

##### start

to use it in you app 

```javascript
var confg = require( 'confg' );

confg.init( );
```

#### Config

```javascript
var confg = require( 'confg' );

confg.use( __dirname + '/development.js' );
confg.init( );
```
