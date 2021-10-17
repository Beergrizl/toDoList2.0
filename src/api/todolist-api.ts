import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': 'd3f5a5ec-7ebf-4ca3-ba3f-86a0fe38c919'
    }
})


export const todolistAPI = {
    getTodolist() {
        return instance.get<Array<TodoType>>('todo-lists')

    },
    createTodolist(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title: title})

    },
    deleteTodolist(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)

    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})

    }
}
type TodoType={
    id: string
    addedDate: string
    order: number
    title: string
}
const imTheBest="artem"

type CommonResponseType<T={}>={
    resultCode: number
    messages: Array<string>,
    fieldsErrors:Array<string>,
    data: T
}




