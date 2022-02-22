import React from "react";

const NavbarList = ({filterItem, menuList}) => {

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* Dynamic Buttons */}
          {menuList.map((curElem) => {
            return (
              <button className="btn-group__item"
                // Must be added arrow function otherwise not working
                onClick={() => filterItem(curElem)}
                >{curElem}
              </button>
            )
          })}

          {/* Static Buttons */}
          {/* <button className="btn-group__item">Breakfast</button>
          <button className="btn-group__item">Luch</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">All</button> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarList;