const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const dir = path.join(__dirname, 'public', 'client shared');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.docx'));

async function extract() {
    let result = '';
    for (const file of files) {
        const filePath = path.join(dir, file);
        const { value } = await mammoth.extractRawText({ path: filePath });
        result += `--- ${file} ---\n${value}\n\n`;
    }
    fs.writeFileSync('extracted_content.txt', result);
    console.log('Extraction complete. Saved to extracted_content.txt');
}

extract().catch(console.error);
