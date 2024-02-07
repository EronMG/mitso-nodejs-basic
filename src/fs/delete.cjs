const fs = require('fs').promises;
const path = require('path');

const fileToRemove = 'fileToRemove.txt';

const remove = async() => {
    try {
        const filePath = path.join(__dirname, 'files', fileToRemove);
        await fs.access(filePath);
        await fs.unlink(filePath);
        console.log(`File deleted: ${fileToRemove}`);
    } catch (error) {
        console.error(`FS operation failed: ${error.message}`);
    }
};

remove();