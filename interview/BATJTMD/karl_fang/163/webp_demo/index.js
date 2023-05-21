const sharp = require('sharp');
const fs = require('fs');

function convertToWebp(inputPath, outputPath, quality) {
  sharp(inputPath)
    .webp({ quality: quality })
    .toFile(outputPath, (err, info) => {
      console.log(outputPath, 'done', new Date());
    });
}

// 处理 images 文件夹中的所有 JPG 和 PNG 图片
const dirPath = 'images';
fs.readdir(dirPath, (err, files) => {
  files.forEach(async (file) => {
    const filePath = `${dirPath}/${file}`;
    const outputFilePath = `${dirPath}/${file.replace(/.jpg|.png/gi, '.webp')}`;
    await convertToWebp(filePath, outputFilePath, 80);
  });
});