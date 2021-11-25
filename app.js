import TodoApp from "./TodoApp.js";
const argv = process.argv.slice(2);
import fs from 'fs';

const app = new TodoApp(argv);
console.log('$ todo: \n');
app.printUserGuide();

let fileContent;
try {
    fileContent = fs.readFileSync('./data/todos.json', 'utf-8');
} catch (err) {
    console.error(err);
}
const parsedContent = JSON.parse(fileContent);

console.log('\n$ todo -l:\n');

app.run(parsedContent);

