import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
// import ChangeColor from './Components/ChangeColor';
import { Counter } from './Components/Counter';

function App() {
  return (
    <div className="App">
    <Profile/>
    <Login/>
    {/* <ChangeColor/> */}
    <Counter/>
    </div>
  );
}

export default App;
