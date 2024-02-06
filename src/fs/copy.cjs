const fs = require('fs').promises;
const path = require('path');

const copy = async() => {
    try {
        // Проверяем, существует ли папка files
        const sourceFolder = 'files';
        const destinationFolder = 'files_copy';

        const sourceFolderPath = path.join(__dirname, sourceFolder);
        await fs.access(sourceFolderPath);

        // Проверяем, существует ли папка files_copy
        const destinationFolderPath = path.join(__dirname, destinationFolder);
        try {
            await fs.access(destinationFolderPath);
        } catch (error) {
            // Если папка не существует, создаем ее
            await fs.mkdir(destinationFolderPath);
        }

        // Получаем список файлов в папке files
        const files = await fs.readdir(sourceFolderPath);

        // Копируем каждый файл из папки files в папку files_copy
        for (const file of files) {
            const sourceFilePath = path.join(sourceFolderPath, file);
            const destinationFilePath = path.join(destinationFolderPath, file);

            // Копируем файл
            await fs.copyFile(sourceFilePath, destinationFilePath);
            console.log(`File copied: ${file}`);
        }

        console.log('Files copied successfully');
    } catch (error) {
        console.error(`FS operation failed: ${error.message}`);
    }
};

// Вызываем функцию для копирования файлов
(async() => {
    await copy();
})();