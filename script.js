class TodoList {
    constructor(){
        this.AllTodos = [];
        this.CompletedTodos = [];
    }

    create(text){
        this.AllTodos.push(text);
    }

    Completed(index){
        const exectIndex = this.AllTodos[index]
        this.AllTodos.splice(index, 1)
        this.CompletedTodos.push(exectIndex);
    }
}

const Todos = new TodoList()
Todos.create("Task 1")
Todos.create("Task 2")
Todos.create("Task 3")
Todos.create("Task 4")

const alltodo = Todos.AllTodos

Todos.Completed(2)

const CompletedResult = Todos.CompletedTodos
console.log(CompletedResult);
console.log(Todos.AllTodos);