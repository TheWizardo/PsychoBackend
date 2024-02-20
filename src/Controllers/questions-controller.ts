import express, { Request, Response, NextFunction } from 'express';
import questionLogic from '../Logic/question-logic';

const router = express.Router();

router.get("/api/:subject/meta", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questions = await questionLogic.getSubjectMetadata(req.params.subject);
        res.json(questions);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/api/:subject/:subsubject", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const amount = req.body.amount ? +req.body.amount : undefined;
        const questions = await questionLogic.getSubsubjectQuestions(req.params.subject, req.params.subsubject, amount);
        res.json(questions);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;