import { useState } from 'react';
import './App.css';
import AppButton from './components/AppButton';
import AppTextInput from './components/AppTextInput';
import Heading from './components/Heading';
import { TodoService } from './utils/TodoService';

function App() {
  const [todoName, setTodoName] = useState("")

  const todoService = new TodoService();

  const addTodoAndResetInput = (todoName) =>{
    todoService.addTodo(todoName).then((response)=>{
      const {data:responseData} = response;
      const {success,message} = responseData;
      if(success) setTodoName("");
      alert(message);
    }).catch(error=>console.log(error.message))
  }

  return (
    <div className="App">
      <Heading>Adding Todo Form</Heading>
      <AppTextInput placeholder={"Please type the todo name"} changeValue={setTodoName} value={todoName}></AppTextInput>
      <AppButton title="Add" onPress={()=>addTodoAndResetInput(todoName)}></AppButton>
    </div>
  );
}

export default App;
