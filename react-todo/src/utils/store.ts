import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'todoLocal',
    storage : localStorage,
});


export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    id : number,
    content: string,
    category : Categories,
};

export const ToDos = atom<IToDo[]>({
    key : "ToDos",
    default : [],
    effects_UNSTABLE: [persistAtom],
});

export const ToDoSelector = selector({
    key: "ToDoSelector",
    get: ({get}) => {
        const getTodos = get(ToDos);
        const getCategory = get(categoryAtom);
        return getTodos.filter((ToDos) => ToDos.category === getCategory);
    },
});

console.log(ToDos);

export const categoryAtom = atom<Categories>({
    key : "categoryAtom",
    default : Categories.TO_DO,
})




