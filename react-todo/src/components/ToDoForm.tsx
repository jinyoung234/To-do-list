import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryAtom, ToDos } from '../utils/store'

const Form = styled.form`
    width: 100%;
` 

const Input = styled.input`
  padding: 0px 15px;  
  width: 50%;
  height: 5vh;
  border: 3px solid white;
  border-radius : 20px;
  background-color : rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: white;
`

const Button = styled.button`
  color : white;
  background-color : rgba(0,0,0,0.3);
  display: flex;
  justify-content:center;
  align-items: center;
  width : 5%;
  border-radius : 10px;
  border: 3px solid white;
  margin-left : 5px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`

interface IValidSubmit {
    toDo : string,
}


function ToDoForm() {
    const setTodos = useSetRecoilState(ToDos);
    const category = useRecoilValue(categoryAtom)
    const validSubmit = (data : IValidSubmit) => {
        console.log(data.toDo);
        setValue("toDo", "");
        setTodos( oldTodos => [{id:Date.now(), content: data.toDo, category} , ...oldTodos ]);
    };

    const {register, handleSubmit, setValue} = useForm<IValidSubmit>();
    return (
            <Form
                style={{display: 'flex', justifyContent:'center', margin:'20px 0px'}} 
                onSubmit={handleSubmit(validSubmit)}
            >
                <Input {...register("toDo", {
                        required: "please add to-Do"
                    })}
                />
                <Button>add</Button>
            </Form>
    )
}

export default ToDoForm