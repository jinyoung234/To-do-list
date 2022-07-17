import { useRecoilValue } from "recoil";
import styled from "styled-components"
import { ToDos } from "../utils/store";

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
    display : flex;
    justify-content : space-between;
    align-items : center;
    color: white;
    width: 54%;
    margin-top : 10px;
    padding: 15px 10px;
    border : 3px solid white;
    border-radius : 10px;
  }

`

function NewToDo() {
    const todos = useRecoilValue(ToDos);
    return (
        <ListContainer>
            <ListItems>
                {
                    todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.content}
                            <div>
                                <button>DOING</button> <button>TO-DO</button> <button>DONE</button>
                            </div>
                        </li>
                    )
                    })
                }
            </ListItems>
        </ListContainer>
    )
}

export default NewToDo