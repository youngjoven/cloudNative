import express, { Request, Response } from 'express';
import os from 'os';

const router = express.Router();
const meminfo = os.totalmem();
router.get('/api/getmem', (req: Request, res: Response) => {
    res.send({meminfo});
});

export { router as getmemRouter }
