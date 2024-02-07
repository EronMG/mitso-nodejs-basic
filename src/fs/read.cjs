const fs = require('fs').promises;
const path = require('path');

const fileToRead = 'fileToRead.txt';

const readFileContent = async() => {
    try {
        const filePath = path.join(__dirname, 'files', fileToRead);
        await fs.access(filePath);
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(`Content of ${fileToRead}:`);
        console.log(content);
    } catch (error) {
        console.error(`FS operation failed: ${error.message}`);
    }
};
readFileContent();