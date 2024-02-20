import { Subsubject, TestQuestion } from "../Models/question";
import config from "../Utils/config";
import dal from "../Utils/dal";

async function getSubjectMetadata(subject: string): Promise<Subsubject[]> {
    const stringData = await dal.getFileAsString(`${config.dataFolder}/${subject}/meta.json`);
    return JSON.parse(stringData);
}

async function getSubsubjectQuestions(subject: string, subsubject: string, amount?: number): Promise<TestQuestion[]> {
    const stringData = await dal.getFileAsString(`${config.dataFolder}/${subject}/${subsubject}.json`);
    const questions = JSON.parse(stringData) as TestQuestion[];
    return questions.length <= amount ? questions : questions.slice(0, amount);
}

export default {
    getSubjectMetadata,
    getSubsubjectQuestions
};