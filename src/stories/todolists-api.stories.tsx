import React, {useEffect, useState} from 'react'

import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('React')
            .then((res) => {
                setState(res.data);
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'ed6a9e3c-186f-442c-8528-188cdefb4c41';
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data);
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'd6b5c5d1-9687-4fb8-b197-73b1a153156f'
        todolistAPI.updateTodolist(todolistId, 'ANGULAR')
            .then((res) => {
                setState(res.data)
            })


    }, [])

    return <div> {JSON.stringify(state)}</div>
}
