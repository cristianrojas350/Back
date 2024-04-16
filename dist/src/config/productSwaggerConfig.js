"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const productSwaggerSpecs = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Swagger Petstore - OpenAPI 3.0',
            description: `This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the \`Edit > Load Petstore OAS 2.0\` menu option!_

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)`,
            version: '1.0.11',
            termsOfService: 'http://swagger.io/terms/',
            contact: {
                email: 'apiteam@swagger.io',
            },
            license: {
                name: 'Apache 2.0',
                url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
            },
        },
        externalDocs: {
            description: 'Find out more about Swagger',
            url: 'http://swagger.io',
        },
        servers: [
            {
                url: 'https://petstore3.swagger.io/api/v3',
            },
        ],
        tags: [
            {
                name: 'pet',
                description: 'Everything about your Pets',
                externalDocs: {
                    description: 'Find out more',
                    url: 'http://swagger.io',
                },
            },
            {
                name: 'store',
                description: 'Access to Petstore orders',
                externalDocs: {
                    description: 'Find out more about our store',
                    url: 'http://swagger.io',
                },
            },
            {
                name: 'user',
                description: 'Operations about user',
            },
        ],
    },
    apis: [], // Aquí deberías agregar las rutas de tus endpoints si las tienes en archivos separados
};
const specs = (0, swagger_jsdoc_1.default)(productSwaggerSpecs);
exports.default = specs;