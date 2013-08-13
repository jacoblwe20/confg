### Confg

Configurable enviroment with a js file.

```shell
npm install confg
```

#### Use

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
