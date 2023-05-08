const fs = require('fs');
const logger = require('log4js').getLogger();

logger.level = 'info';

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    logger.info('Start reading file...');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        logger.error(`Error occurred while reading file: ${err.message}`);
        reject(err);
      } else {
        logger.info(`File read completed. Content: ${data}`);
        resolve(data);
      }
    });
  });
}

readFile('example.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
  })
  .finally(() => {
    logger.info('File reading complete.');
  });