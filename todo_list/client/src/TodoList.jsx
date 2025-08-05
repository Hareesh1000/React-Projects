import React, { useState } from 'react'

function TodoList() {

    const [todoitems,setToDoItem] = useState([]);

    const[todoinput,setToDoInput] = useState("")

    const[itemStyle,setitemStyle] = useState({});



     const deleteToDo = (index) => {
            setitemStyle({color:"red",textDecoration:"line-through"})
    }


    const showToDoList = todoitems.map(
        (item,index)=>(

            
                    <div className='toDoItemSection' style={itemStyle} id={item}>
                        <i class="fa-regular fa-circle-check"id='circleCheck' onClick={deleteToDo}></i>
                        <p >{item}</p>
                       <a> <i class="fa-regular fa-star" id='itemStar' ></i></a>

                    </div>
        )
    );

   

    const submitItem = () => {

            let prevState = todoitems;
            setToDoItem (
                ()=> {
                   return [...prevState,todoinput]
                }
            )
            setToDoInput("");
            
    }

  return (
    <div className='todoListSection'>
            <div className='toDoListItem'> 
{/* 
                    <div className='toDoItemSection'>
                        <i class="fa-regular fa-circle-check"id='circleCheck' ></i>
                        <p>lsdjfhdasfjuhbasdjfb</p>
                       <div> <i class="fa-regular fa-star" id='itemStar'></i></div>

                    </div> */}
                    {/* {todoitems.length >0 ? showToDoList : <div></div>} */}
                    {showToDoList}
                  

                </div>

            <div className='todoListInput'>
                <input type='text' id='inputTextField' placeholder='Add Something here'
                value={todoinput} onChange={(e)=> {setToDoInput(e.target.value)}
                
                }/> 
                <button id='addbutton'><i id='plusIcon' class="fa-solid fa-plus" onClick={submitItem}></i></button>
                {/* <button onClick={submitItem}>Submit</button> */}
            </div>

    </div>
    
  )
}

export default TodoList