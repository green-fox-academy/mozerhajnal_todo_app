export default class TodoApp{

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

    list(tasks){
        if(tasks.length === 0){
            console.log("Nincs mára tennivalód! :)");
        }
        tasks.forEach((element, index) => {
            console.log(index+1, '-', element);
        })
    }

    run(tasks){
        if (this.args.includes('-l')) {
            this.list(tasks);
        }
    }

}