import React, { useState } from "react";
import Button from "../Button";
import styles from "./TodoForm.module.css";


type Props ={
   addTodo: (description: string) => void; 
}

export default function TodoForm(props: Props){
    const[todoInput, setTodoInput] = useState("");

    function onAddTodo(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(todoInput.trim()){
            props.addTodo(todoInput);
            setTodoInput("");
        }else{
            alert("Digite uma descrição válida");
        }
    }

    return(
        <form onSubmit={onAddTodo} className={styles.form}>
            <input type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
            <Button
                type="submit" 
                backgroundColor="lightcoral" 
                icon="fa-solid fa-paper-plane"
            >Submit</Button>
        </form>
    );
}