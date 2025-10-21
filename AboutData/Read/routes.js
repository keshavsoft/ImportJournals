import express from 'express';
const router = express.Router();

import { router as routerFromAllFiles } from "./AllFiles/routes.js";

router.use("/AllFiles", routerFromAllFiles);//return all original data

export { router };