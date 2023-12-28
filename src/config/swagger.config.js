import { __dirname } from "../utils.js";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1", //version de swagger
    info: {
      //describe la documentacion
      title: "Products API documentation",
      version: "1.0.0",
      description: "Definition of endpoints for the products API",
    },
  },
  apis: [`${path.join(__dirname, "/docs/**/*.yaml")}`], //archivos que contienen la documentacion
};

//variable que interpreta las opciones a trabajar con swagger
export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
