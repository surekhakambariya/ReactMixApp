// import './App.css';
// import Resturant from './Components/ResturantApp/Resturant/Resturant'

const MainNavbar = ({getResturantData}) => {
  return (
    <div>
      <nav className="main-navbar">
        <div className="logo-style"><h2>Logo</h2></div>
        <div className="main-navbar-btn-group">
          <button className="btn-group__item" onClick={() => getResturantData('Resturant')} >Resturant App</button>
          <button className="btn-group__item" onClick={() => getResturantData('ToDo')}>ToDo App</button>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
