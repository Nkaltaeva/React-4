import './App.css'; 
import {Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/Home';
import ChatsPage from './pages/Chats';
import Chat from './components/chat/Chat';


function App() {
  return(
    <div className="App">
      <>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage userName={Пользователь}/>}/>
        <Route path='chats' element = {<ChatsPage/>}>
          <Route path='chatsID' element = {<ChatsPage/>}/>
        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;

const NavBar = () => {
  return(
    <div className='navBar'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/chats'}>Чаты</Link>
      <Link to={'/profile'}>Профиль</Link>
    </div>
  )
}
const NotFound = () =>{

  return(
    <div style={{width:"100%", height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <h1>Профиль пуст</h1>
      <button>Заполнить профиль</button>
    </div>
  )
}