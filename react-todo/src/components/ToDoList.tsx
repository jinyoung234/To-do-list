import styled from "styled-components";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, ToDoSelector, categoryAtom } from "../utils/store";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border : 1px solid white;
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
  span {
    margin-top : 10px;
  }
`

const ListContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  border-bottom : 2px solid white;
  border-left: 2px solid white;
  margin-left: 9.6%;
`

const ListCatagory = styled.div`
  width: 100%;
  border : 2px solid white;
  border-right: 0px;
  border-left: 0px;
  margin-bottom : 10px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 10px 0px;
  color: white;
`

const ListItem = styled.ul`
  width: 100%;
  height: 174vh;
  display :flex;
  flex-direction : column;
  align-items : center;
  border-right: 2px solid white;
  li {
    display : flex;
    justify-content : space-between;
    align-items : center;
    color: white;
    width: 90%;
    padding: 15px 10px;
    border : 3px solid white;
    border-radius : 10px;
  }
`

const Select = styled.select`
  width: 10vw;
  height: 5vh;
  border: 2px solid white;
  border-radius : 20px;
  background-color : rgba(0,0,0,0.3);
  text-align : center;
  color : white;
`;

function ToDoList() {
  const todos = useRecoilValue(ToDoSelector);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(category);
  console.log(todos);
  return (
    <Container>
      <Title><span>JToDo</span></Title>
      <hr/>
      <ToDoForm/>
      <ListContainer>
            <ListItem>
              <ListCatagory>
                <Select value={category} onInput={onInput}>
                  <option value={Categories.TO_DO}>TO DO</option>
                  <option value={Categories.DOING}>DOING</option>
                  <option value={Categories.DONE}>DONE</option>
                </Select>
              </ListCatagory>
              {todos?.map((toDo) => (
                  <ToDo key={toDo.id} {...toDo} />
              ))}
            </ListItem>
      </ListContainer>
    </Container>
  );
}
export default ToDoList;