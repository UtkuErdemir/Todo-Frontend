import { axiosInstanceForCDC,axiosInstance } from './axios';

export class TodoService {
    constructor(mock){
        this.axios = mock ? axiosInstanceForCDC : axiosInstance
    }
    async addTodo(todoName){
        const queryString = new URLSearchParams({todo_name:todoName}).toString();
        return  this.axios.post("/todos",queryString).catch(error=>error.response ? error.response: "");
    }
}