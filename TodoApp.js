import Todo from "./Todo.js"
import {saveInFile} from "./fileoperation.js"

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
        if(this.args.length === 1){
            console.log("Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!");
        }
        this.args.filter((element, index) => {
            if(index === 1){
                this.todoList.push(new Todo(element));
                saveInFile(this.todoList);
                console.log(`${element} was added!`);
            }
        });
    }

    completeTask(){
        this.args.filter((element, index) => {
            if(index === 1){
                this.todoList[element-1].status = 1;
                saveInFile(this.todoList);
                console.log(`${this.todoList[element-1].task} completed!`);
            }
        });
    }

    removeTask(){
        this.args.filter((element, index) => {
            if(index === 1){
                const removedItem = this.todoList[element-1].task;
                this.todoList.splice([element-1],1);
                saveInFile(this.todoList);
                console.log(`${removedItem} removed!`);
            }
        });
    }

    run(){
        if(!this.args.length){ 
            this.printUserGuide();
        }else if (this.args.includes('-l')) {
            this.list();
        }else if(this.args.includes('-a')){
            this.addNewToDo();
        }else if(this.args.includes('-c')){
            this.completeTask();
        }else if(this.args.includes('-r')){
            this.removeTask();
        }else{
            console.log("Nem támogatott argumentum!");
            this.printUserGuide();
        }
    }

}