import axios from "axios";

const config = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
};

const mockUrl = "http://127.0.0.1:3030";
const baseUrl = "https://ue-todo-app-backend.herokuapp.com";

export async function addTodo(todoName, mock) {
  const queryString = new URLSearchParams({ todo_name: todoName }).toString();
  const url = mock ? mockUrl : baseUrl;
  return axios
    .post(url+"/todos", queryString, config)
    .catch((error) => (error.response ? error.response : ""));
}
export async function getTodos(mock) {
  const url = mock ? mockUrl : baseUrl;
  return axios
    .get(url+"/todos", config)
    .catch((error) => (error.response ? error.response : ""));
}
