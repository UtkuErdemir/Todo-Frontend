import axiosInstance from './axios';

export async function addTodo(todoName){
    const queryString = new URLSearchParams({todo_name:todoName}).toString();
    return axiosInstance.post("/todos",queryString);
}