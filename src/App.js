import './App.css';
import Resturant from './Components/ResturantApp/Resturant/Resturant'
import MainNavbar from './Components/MainNavbar';
import ToDo from './Components/ToDoApp/ToDo/ToDo';
import { useState } from 'react';

function App() {
  const [dataDemo, setDataDemo] = useState('');

  const getResturantData = (navName) => {
    console.log('demo', navName);
    if (navName === 'Resturant')
    {
      setDataDemo(<Resturant></Resturant>);
      return;
    }
    
    if (navName === 'ToDo')
    {
      setDataDemo(<ToDo></ToDo>);
      return;
    }
  }

  return (
    <div>
      <MainNavbar getResturantData={getResturantData}></MainNavbar>
      {dataDemo}
    </div>
  );
}

export default App;
