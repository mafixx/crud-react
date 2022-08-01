import { createContext, ReactNode, useContext, useState } from "react";
import { ITodo } from "../types/Todo";

type ITodoContext = {
    todos: ITodo[];
    addTodo: (description: string) => void;
    editTodo: (updatedTodo: ITodo) => void;
    deleteTodo: (id: number) => void;
}

const TodoContext = createContext<ITodoContext>(null!);

export function TodoProvider({ children }: {children: ReactNode}){
    const [todos, setTodos] = useState<ITodo[]>([]);

    function addTodo(description: string){
        const newTodo: ITodo ={
            id: (todos[todos.length - 1]?.id || 0)  + 1,
            description: description,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    function editTodo(updatedTodo: ITodo){
        // O map vai percorrer todos os elementos do vetor e retornar um novo vetor com as modificações feitas dentro
        // da funçao callback que é passada como parâmetro
       
        const updatedTodos = todos.map(todo =>{
    
            // Se o id do todo for igual ao id do todo que queremos editar ele irá mudar a descrição
            if(todo.id === updatedTodo.id){
                todo = {...updatedTodo};
            }
    
            // E necessário retornar alguma coisa da função map
            return todo;
        });
    
        setTodos(updatedTodos);
    }

        function deleteTodo(id: number){
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
        }

    return (
        <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
            { children }
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);