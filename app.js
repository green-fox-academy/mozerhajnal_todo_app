import TodoApp from "./TodoApp.js";
import {readFile} from "./fileoperation.js"
const argv = process.argv.slice(2);


const app = new TodoApp(argv);

const parsedContent = readFile();

app.saveInitValues(parsedContent);
app.run();

