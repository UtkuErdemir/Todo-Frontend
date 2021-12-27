import { useState, useEffect } from 'react';
import './App.css';
import AppButton from './components/AppButton';
import AppTextInput from './components/AppTextInput';
import Heading from './components/Heading';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoList/components/TodoListItem';
import { TodoService } from './utils/TodoService';

function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState([]);
  const [shouldLoad, setShouldLoad] = useState(true);
  const todoService = new TodoService();

  useEffect(() => {
    if(shouldLoad)
    todoService.getTodos().then(response=>{
      const {data: responseData} = response;
      const {data: todos} = responseData;
      setTodos(todos);
      setShouldLoad(false);
      console.log(todos);
    })
  }, [shouldLoad])


  const addTodoAndResetInput = (todoName) =>{
    todoService.addTodo(todoName).then((response)=>{
      const {data:responseData} = response;
      const {success,message} = responseData;
      if(success) setTodoName("");
      alert(message);
      setShouldLoad(true);
    }).catch(error=>console.log(error.message))
  }

  return (
    <div className="App">
      <Heading>Adding Todo Form</Heading>
      <AppTextInput placeholder={"Please type the todo name"} changeValue={setTodoName} value={todoName}></AppTextInput>
      <AppButton title="Add" onPress={()=>addTodoAndResetInput(todoName)}></AppButton>

      <div style={{width:"30%", margin:"auto"}}>
        <TodoList type="circle">
           {todos && todos.map(({id,todo_name})=><TodoListItem key={id} text={todo_name}></TodoListItem>)}
        </TodoList>
      </div>      
    </div>
  );
}

export default App;
