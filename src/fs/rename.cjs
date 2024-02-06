const fs = require('fs').promises;
const path = require('path');

const sourceFilename = 'wrongFilename.txt';
const targetFilename = 'properFilename.md';

const rename = async() => {
    try {
        const sourceFilePath = path.join(__dirname, 'files', sourceFilename);
        await fs.access(sourceFilePath);
        const targetFilePath = path.join(__dirname, targetFilename);
        try {
            await fs.access(targetFilePath);
            throw new Error(`FS operation failed: ${targetFilename} already exists`);
        } catch (error) {
            await fs.rename(sourceFilePath, targetFilePath);
            console.log(`File renamed: ${sourceFilename} -> ${targetFilename}`);
        }
    } catch (error) {
        console.error(`FS operation failed: ${error.message}`);
    }
};

(async() => {
    await rename()
})()