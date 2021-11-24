import TodoApp from "./TodoApp.js";

const argv = process.argv.slice(2);

const app = new TodoApp(argv);
app.init();
