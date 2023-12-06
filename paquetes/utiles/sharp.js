const sharp = require('sharp');

sharp('./captura.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')
