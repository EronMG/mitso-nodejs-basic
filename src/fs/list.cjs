const fs = require('fs').promises;
const path = require('path');

const list = async() => {
    try {
        const folderPath = path.join(__dirname, 'files');
        await fs.access(folderPath);
        const files = await fs.readdir(folderPath);
        console.log('Files in the "files" folder:');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
    } catch (error) {
        console.error(`FS operation failed: ${error.message}`);
    }
};

list();