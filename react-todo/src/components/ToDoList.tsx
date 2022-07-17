import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color : ${props => props.theme.bgColor};
`

const Title  = styled.div`
  font-size : 40px;
  width: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
  color: whitesmoke;
  padding : 20px 0px;
`

const Input = styled.input`
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

const ListContainer = styled.div`
  width:100%;
`

const ListItems = styled.ul`
  width: 100%;
  display :flex;
  flex-direction : column;
  align-items: center;
  justify-content:center;
  li {
    color: white;
    width: 53.6%;
    margin-top : 10px;
    padding: 10px 10px;
    border : 3px solid white;
    border-radius : 10px;
  }
`

interface IToDo {
  id : number,
  content: string,
  catagory : "TO-DO" | "DOING" | "DONE",
}

interface IValidSubmit {
  toDo : string,
}

function ToDoList() {

  const ToDos = atom<IToDo[]>({
      key : "ToDos",
      default : [],
  });

  const [todos, setTodos] = useRecoilState(ToDos);

  const {register, handleSubmit, setValue} = useForm<IValidSubmit>();

  const validSubmit = (data : IValidSubmit) => {
    console.log(data.toDo);
    setValue("toDo", "");
    setTodos( oldTodos => [{id:Date.now(), content: data.toDo, catagory:"TO-DO"} , ...oldTodos ]);
  };
  return (
    <Container>
      <Title>JToDo</Title>
      <hr/>
      <form
        style={{display: 'flex', justifyContent:'center', marginTop:'20px'}} 
        onSubmit={handleSubmit(validSubmit)}>
          <Input {...register("toDo", {
            required: "please add to-Do"
          })}
            placeholder="add To do"
          />
          <Button>add</Button>
      </form>
      <ListContainer>
        <ListItems>
          {
            todos.map((todo) => {
              return <li key={todo.id}>{todo.content}</li>
            })
          }
        </ListItems>
      </ListContainer>
    </Container>
  );
}
export default ToDoList;