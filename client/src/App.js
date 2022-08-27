import logo from './logo.svg';
import './App.css';
import Navroutes from "./Mainroutes/Navroutes";
import Sidebarroutes from './Timerroutes/Sidebarroutes';
// import Navroutes from './Mainroutes/Navroutes';
// import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Routes/> */}
     <Navroutes/>
      {/* <Sidebarroutes/> */}
    </div>
  );
}

export default App;
