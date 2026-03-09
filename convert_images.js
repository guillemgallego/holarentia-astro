import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'public/images';
const files = fs.readdirSync(imagesDir);

for (const file of files) {
  if (file.endsWith('.png')) {
    const filePath = path.join(imagesDir, file);
    const outputFileName = file.replace('.png', '.webp');
    const outputPath = path.join(imagesDir, outputFileName);
    
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`Converted ${file} to ${outputFileName}`);
  }
}
