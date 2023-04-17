import React , {useState} from 'react'

function TodoItem(props) {
  const [editing , setEditing] = useState(false)
    const [updateText,setUpdateText]  = useState('')
    let viewMode = {};
    let editMode = {};
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const editHandle = () =>{
        setEditing(true) 
        setUpdateText(props.item.text)
    }
    const updateHandle = () =>{
        props.editItem(props.item.id,updateText)
        setEditing(false)
    } 
    const updateTodoHandler = (e)=>{
      if (e.key ==='Enter'){
        updateHandle()
    }
    }
  return (
    <li key={props.item.id}>
      <div style={viewMode}>
          <p>{props.item.text}</p>
          <button type='submit' onClick={()=>props.deleteItem(props.item.id)}>delete</button>
          <button type='submit' onClick={editHandle}>edit</button>
      </div>
      <div style={editMode}>
          <input value={updateText} onChange ={(e)=>{setUpdateText(e.target.value)}} onKeyDown={updateTodoHandler}/>
          <button onClick={updateHandle} >update</button>
      </div>
  </li>
  )
}

export default TodoItem
