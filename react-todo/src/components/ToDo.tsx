import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, ToDos } from "../utils/store";

const ToDoList = styled.li`
    margin-bottom: 10px;
    div {
        width: 50%;
        display: flex;
        justify-content : flex-end;
    }
`

const Button = styled.button`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 25%;
    height: 4vh;
    background-color : rgba(0,0,0,0.5);
    color:white;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 10px;
    margin-right: 5px;
`;

function ToDo({id, category, content} : IToDo) {
    const setToDos = useSetRecoilState(ToDos);

    const onClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        const name = event.currentTarget.textContent;
        setToDos((prevTodos) => {
            const targetIndex = prevTodos.findIndex((todo) => todo.id === id);
            const newTodo : IToDo = {
                id,
                content,
                category: name as IToDo["category"],
            };
        const newTodos = [...prevTodos]; // create new array
        newTodos.splice(targetIndex, 1, newTodo);
        return newTodos;
        });
    };

    // ToDo 지우는 function
    const deleteTodo = () => {
        setToDos((prevTodos) => {
            // 지울 todo index search
            const targetIndex = prevTodos.findIndex((todo) => todo.id === id);
            const newTodos = [...prevTodos];
            newTodos.splice(targetIndex, 1);
            return newTodos;
        })
    };
    return (

         <ToDoList>
            {content}
               <div>
                 { category !== Categories.DOING && <Button onClick={onClick} >DOING</Button>} 
                 { category !== Categories.TO_DO && <Button onClick={onClick} >TO_DO</Button>} 
                 { category !== Categories.DONE && <Button onClick={onClick} >DONE</Button>}
                 <Button onClick={deleteTodo}>DELETE</Button>
               </div>
         </ToDoList>
        )

}

export default ToDo