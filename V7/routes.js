import express from 'express';

const router = express.Router();

import { router as routerFromfile5 } from "./file5/routes.js";
import { router as routerFromfile4 } from "./file4/routes.js";
import { router as routerFromfile3 } from "./file3/routes.js";
import { router as routerFromfile2 } from "./file2/routes.js";
import { router as routerFromfile1 } from "./file1/routes.js";
import { router as routerFromJournalsTable } from "./JournalsTable/routes.js";

router.use("/file5", routerFromfile5);
router.use("/file4", routerFromfile4);
router.use("/file3", routerFromfile3);
router.use("/file2", routerFromfile2);
router.use("/file1", routerFromfile1);
router.use("/JournalsTable", routerFromJournalsTable);

export { router };