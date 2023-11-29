import 'reflect-metadata';
import "express-async-errors";
import express, { Application } from 'express';

import middlewares from './middlewares';
import { clientRouter } from './routers';
import { contactRouter } from './routers';


const app: Application = express();
app.use(express.json());

app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);

app.use(middlewares.handleErrors);

export default app;