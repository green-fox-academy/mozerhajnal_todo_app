export default class TodoApp{

    constructor(argv){
        this.argv = argv;
    }

    message = `
Parancssori Todo applikáció
=============================
    
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`;

    init(){
        console.log(this.message);
    }

}