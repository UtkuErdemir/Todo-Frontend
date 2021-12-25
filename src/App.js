import { useState } from 'react';
import './App.css';
import AppButton from './components/AppButton';
import AppTextInput from './components/AppTextInput';
import Heading from './components/Heading';
import { addTodo } from './utils/addTodo';

function App() {
  const [todoName, setTodoName] = useState("")

  const addTodoAndResetInput = (todoName) =>{
    addTodo(todoName).then((response)=>{
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
