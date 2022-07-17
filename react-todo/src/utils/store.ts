import { atom } from "recoil";

interface IToDo {
    id : number,
    content: string,
    catagory : "TO-DO" | "DOING" | "DONE",
}

export const ToDos = atom<IToDo[]>({
    key : "ToDos",
    default : [],
});