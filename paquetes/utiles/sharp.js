const sharp = require('sharp');

sharp('./captura.png')
    .resize(80)
    .toFile('resized.png')
    .grayscale();
