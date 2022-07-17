import styled from "styled-components";
import NewToDo from "./NewToDo";
import ToDoForm from "./ToDoForm";

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

function ToDoList() {
  return (
    <Container>
      <Title>JToDo</Title>
      <hr/>
      <ToDoForm/>
      <NewToDo/>
    </Container>
  );
}
export default ToDoList;