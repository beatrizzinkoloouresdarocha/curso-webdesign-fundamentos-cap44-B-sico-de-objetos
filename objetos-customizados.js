const task1 = {
    nome: "task1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    ChangeName: function(name){
        console.log(this)
    }
}

const task2 = {
    nome: "task2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
}

task1.nome = "task 1 updated"; 
task1.updatedAt = new Date();

task1. ChangeName()

console.log(task1);
console.log(task2);
