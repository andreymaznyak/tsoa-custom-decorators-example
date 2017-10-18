import "reflect-metadata";
import "./example.controller";
import "./swagger.controller";
import { createExpressServer } from 'routing-controllers';
import { join } from 'path';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require( join( '..', 'swagger.json' ) );

const app = createExpressServer(); // register controllers routes in our express application

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001); // run express app
console.log("Express server is running on port 3001. Open http://localhost:3001/users/");