import Form from './components/Form';
import Users from './components/Users';
import {useState} from 'react';
function App() {
  const [ data, setData ] = useState([]);

  function addToDataHandler(newData){
    let id = data.length + 1;
    setData((prevState)=>{
      return [...prevState,{ 'id' : id  , 'name': newData.name, 'email': newData.email, 'phone': newData.phone}];
    })
  }

  return (
    <div className="App">
      <Form addToData = {addToDataHandler}></Form>
      <Users userList = {data}/>
    </div>
  );
}

export default App;
