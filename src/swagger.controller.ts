import { JsonController, Get } from 'routing-controllers';
import { join } from 'path';
let swagger = {};
try {
    swagger = require( join( '..', 'swagger.json' ) );
} catch ( e ) {
    console.error( e );
}

@JsonController( '/swagger' )
export class SwaggerConroller {
    /**
     * @summary send swagger spec.json
     * @return {string}
     */
    @Get( '/spec.json' )
    getSpec(): string {
        return JSON.stringify( swagger, null, 4 );
    }
}
