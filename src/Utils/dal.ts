import config from './config';
import fs from "fs/promises";

// executing a query on the DB
async function getFileAsString(path: string): Promise<string> {
    const file = await fs.readFile(path, "utf-8");
    return file
}

export default { getFileAsString };