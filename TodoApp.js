import fs from 'fs';
import Todo from "./Todo.js"

export default class TodoApp{
    todoList = [];

    constructor(args){
        this.args = args;

    }

    print(string){
        console.log(string);
    }

    printUserGuide(){
        const message =
        'Parancssori Todo applikáció\n\
        =============================\n\
        \n\
        Parancssori argumentumok:\n\
        -l   Kilistázza a feladatokat\n\
        -a   Új feladatot ad hozzá\n\
        -r   Eltávolít egy feladatot\n\
        -c   Teljesít egy feladatot';
        
        return this.print(message);      
        
    }

    saveInitValues(todo){
        todo.forEach(element => {
            if(this.todoList.indexOf(element) > -1){}
                this.todoList.push(element);
        });
    }

    list(){
        if(this.todoList.length === 0){
            console.log("Nincs mára tennivalód! :)");
        }
        this.todoList.forEach((element, index) => {
            console.log(index+1, '-', element.task);
        })
    }

    addNewToDo(){
        this.args.filter((element, index) => {
            if(index === 1){
                this.todoList.push(new Todo(element));
            }
        });
    }

    saveInFile(){
        fs.writeFileSync('./data/todos.json', JSON.stringify(this.todoList));
    }

    completeTask(){
        this.args.filter((element, index) => {
            if(index === 1){
                this.todoList[element-1].status = 1;
            }
        });
    }

    run(){
        if (this.args.includes('-l')) {
            this.list();
        }else if(this.args.includes('-a')){
            this.addNewToDo();
            this.saveInFile();
        }else if(this.args.includes('-c')){
            this.completeTask();
            this.saveInFile();
        }
    }

}