import * as express from 'express';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DesafioFullStack Documentation',
      version: '1.0.0',
      description: 'A description of your API',
    },
  },
  apis: ['./src/routers/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};