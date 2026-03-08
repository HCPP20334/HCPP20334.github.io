const fs = require("fs");
const path = require("path");

// Use path.join to ensure you are looking in the right spot
const audioDir = path.join(__dirname, "./");

function parse() {
    try {
        // Read the directory synchronously
        const files = fs.readdirSync(audioDir);

        // JSON.stringify handles the commas and quotes for you automatically
        const output = `var g_sAudioFilesArray = ${JSON.stringify(files)};`;
        
        console.log(output);
    } catch (err) {
        console.error('Ошибка чтения папки audios:', err.message);
    }
}

parse();