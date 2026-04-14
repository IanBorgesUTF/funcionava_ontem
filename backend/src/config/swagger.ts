import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const openApiPath = path.resolve(__dirname, '../../docs/openapi.yaml');
const openApiFile = fs.readFileSync(openApiPath, 'utf8');
const openApiDocument = yaml.parse(openApiFile);

export function setupSwagger(app: Express) {
  app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
  // Endpoint opcional para baixar o YAML cru
  app.get('/apidocs.yaml', (_req, res) => {
    res.type('text/yaml').send(openApiFile);
  });
}
