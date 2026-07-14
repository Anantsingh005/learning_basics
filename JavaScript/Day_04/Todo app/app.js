let todo =[];

let req = prompt("Enter your todo request: ");

while(true){
    if(req === "quit"){
        console.log("You have exited the app");
        break;
    }

    if(req === "list"){
        console.log("-----------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("-----------------------");
    }else if(req === "add"){
        let task = prompt("Enter your task: ");
        todo.push(task);
        console.log(`${task} has been added to the list`);
    }else if(req === "delete"){
        let index = prompt("Enter the index of the task to delete: ");
        todo.splice(index, 1);
        console.log(`Task deleted`);
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        } 
    }else{
        console.log("Invalid request");
    }
    req = prompt("Enter your todo request: ");

}