import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header'
import { changeUser, selectUser } from './redux/userSlice';

function App() {
  const [name, setName] = useState('')

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  console.log(user, 'USER')

  const handleLogin = () => {
    dispatch(changeUser(name))
  }

  return (
    <div className="App">
      <Header/>
      <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
