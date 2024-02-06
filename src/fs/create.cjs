const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async() => {
    try {
        await fs.access(filePath);
        throw new Error('FS operation failed: File already exists');
    } catch (error) {
        await fs.writeFile(filePath, fileContent);
        console.log('File created successfully: fresh.txt');
    }
};

(async() => {
    await create();
})();