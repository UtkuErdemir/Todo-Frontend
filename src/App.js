import { useState, useEffect } from 'react';
import './App.css';
import AppButton from './components/AppButton';
import AppTextInput from './components/AppTextInput';
import Heading from './components/Heading';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoList/components/TodoListItem';
import {getTodos,addTodo} from './utils/service';

function App() {
  const [todoName, setTodoName] = useState("")
  const [todos, setTodos] = useState([]);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    if(shouldLoad)
    getTodos().then(response=>{
      const {data: responseData} = response;
      const {data: todos} = responseData;
      setTodos(todos);
      setShouldLoad(false);
    })
  }, [shouldLoad])


  const addTodoAndResetInput = (todoName) =>{
    addTodo(todoName).then((response)=>{
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
        <TodoList type="circle" data-testid="list">
           {todos && todos.map(({id,todo_name})=><TodoListItem key={id} text={todo_name}></TodoListItem>)}
        </TodoList>
      </div>      
    </div>
  );
}

export default App;
