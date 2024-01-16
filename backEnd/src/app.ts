import cors from "cors";
import 'reflect-metadata';
import "express-async-errors";
import middlewares from './middlewares';
import express, { Application } from 'express';

import docRouter from "./routers/docs.router";
import { clientRouter } from './routers';
import { setupSwagger } from "./swagger/swagger";
import { contactRouter } from './routers';
import { sessionRouter } from './routers/session.router';


const app: Application = express();

setupSwagger(app);

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173"}));

app.use("/login", sessionRouter);
app.use("/clients", clientRouter);
app.use("/contacts", contactRouter);
app.use('/docs', docRouter);
app.use(middlewares.handleErrors);

export default app;