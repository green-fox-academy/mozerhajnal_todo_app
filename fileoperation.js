import fs from 'fs';

export function readFile() {
    let fileContent;
    try {
        fileContent = fs.readFileSync('./data/todos.json', 'utf-8');
    } catch (err) {
        console.error(err);
    }
    const parsedContent = JSON.parse(fileContent);
    return parsedContent;
}

export function saveInFile(data) {
    return fs.writeFileSync('./data/todos.json', JSON.stringify(data));
}
