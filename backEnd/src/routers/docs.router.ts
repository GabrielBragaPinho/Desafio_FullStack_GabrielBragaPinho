import { setupSwagger } from "../swagger/swagger";
import express from 'express';
import swaggerUi from 'swagger-ui-express';


const docRouter = express.Router();

/**
 * @swagger
 * /docs:
 *   get:
 *     summary: Get API documentation
 *     description: Returns Swagger documentation
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message: Swagger documentation
 */

/**
 * @swagger
 * /clients:
 *   post:
 *     summary: Create a CLient
 *     description:
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message: {"name": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }
 */
/**
 * @swagger
 * /clients:
 *   get:
 *     summary:  List CLients
 *     description:
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message: [{"name": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          },
 *                          {"name": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }]
 */
/**
 * @swagger
 * /clients:
 *   delete:
 *     summary: Delete a Client
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message:
 */
/**
 * @swagger
 * /clients:
 *   patch:
 *     summary: Delete a Client
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message:  {"name": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }
 */
/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a Contact
 *     description:
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message: {"fullName": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }
 */
/**
 * @swagger
 * /contacts:
 *   get:
 *     summary:  List Contacts
 *     description:
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message: [{"fullName": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          },
 *                          {"fullName": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }]
 */
/**
 * @swagger
 * /contacts:
 *   delete:
 *     summary: Delete a Contact
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       204:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message:
 */
/**
 * @swagger
 * /contacts:
 *   patch:
 *     summary: Update a Contact
 *     description:
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message:  {"fullName": name,
 *                          "email": email,
 *                          "phoneNumber": phoneNumber,
 *                          "registeredAt": date,
 *                          "id": id
 *                          }
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in with your credentials
 *     description:
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           text/html:
 *             example:
 *               message:
 */
docRouter.use('/', swaggerUi.serve);
docRouter.get('/', swaggerUi.setup(setupSwagger));

export default docRouter;