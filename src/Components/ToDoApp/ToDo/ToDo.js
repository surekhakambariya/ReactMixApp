import { useState, useEffect } from 'react';
import './ToDo.css';

// get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
}; 

const ToDo = () => {

    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    // add the items fucnction
    const addItem = () => {
        console.log(inputValue);
        if (!inputValue) {
            alert("plz fill the data");
        }else if (inputValue && toggleButton) {
            setItems(
              items.map((curElem) => {
                if (curElem.id === isEditItem) {
                  return { ...curElem, name: inputValue };
                }
                return curElem;
              })
            );
      
            setInputValue("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputValue,
            };
            setItems([...items, myNewInputData]);
            setInputValue("");
        }
    }

    // Edit item
    const editItem = (itemId) => {
        const editedItem = items.find((elem) => {
            return elem.id === itemId;
        });
        setInputValue(editedItem.name);
        setIsEditItem(itemId);
        setToggleButton(true);
    }

    // Delete todo list item
    const deleteItem = (itemId) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== itemId;
        })
        setItems(updatedItems);
    }

    // Remove all todo items
    const removeAll = () => {
        setItems([]);
    }

    // adding localStorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        {/* <i className="far fa-edit add-btn"></i> */}
                        {toggleButton ? (
                            <i className="far fa-edit add-btn" onClick={addItem}></i>
                            ) : (
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        )}
                    </div>
                    {/* show our items  */}
                    <div className="showItems">
                        {items.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn"
                                        onClick={() => editItem(curElem.id)}
                                        ></i>
                                        <i className="far fa-trash-alt add-btn"
                                            onClick={() => deleteItem(curElem.id)}
                                        ></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
        
                    {/* remove all button  */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={removeAll}
                        >
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
export default ToDo;