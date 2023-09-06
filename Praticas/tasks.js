const tasks = [{
    id: 1,
    name: "Guilherme",
    completed: ""
}];

const getTasks = () => tasks;

function addTasks(taskName) {
    const tarefas = [{
        id: 2,
        name: taskName,
        completed: false
    }]
    tasks.push(...[tarefas])
}

tasks.push(...tarefa)