import React from "react";
import { useForm } from "react-hook-form";

interface IValidSubmit {
  toDo : string,
}

function ToDoList() {
  const {register, handleSubmit, setValue} = useForm<IValidSubmit>();
  const validSubmit = (data:IValidSubmit) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(validSubmit)}>
      <input {...register("toDo", {
        required: "please add to-Do"
      })}
        placeholder="add To do"
      />
      <button>add</button>
    </form>
  );
}
export default ToDoList;