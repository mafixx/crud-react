import Button from "./Button";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList(){

const todos = [
    { id: 1, description: "fdafdsafdsa", completed:false },
    { id: 2, description: "fdafdsafdsa", completed:false },
]

function editTodo(id: number, description: string){
    // O map vai percorrer todos os elementos do vetor e retornar um novo vetor com as modificações feitas dentro
    // da funçao callback que é passada como parâmetro
   
    const updatedTodos = todos.map(todo =>{

        // Se o id do todo for igual ao id do todo que queremos editar ele irá mudar a descrição
        if(todo.id === id){
            todo.description = description
        }

        // E necessário retornar alguma coisa da função map
        return todo;
    });

    setTodos(updatedTodos);
}

    return (
        <div className={styles.container}> 
            <TodoItem description="Estudar React" />
            <Button backgroundColor="blue" icon="fa-solid fa-paper-plane" onClick={() => {}} >
               Submit
            </Button>
        </div>
    )
}