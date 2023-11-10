import {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';

const TaskSection = () => {
    const [task, setTask] = useState('');
    const [array, setArray] = useState([]);

    const handleChange = (event) => {
      setTask(event.target.value);
    }

    const handleClick = () => {
      const newId = array.length === 0 ? 1 : array[array.length-1].id + 1;
      const newArray = [...array, {id: newId, name: task}];
      setArray(newArray);
    }

    const handleDeleteClick = (id) => {
      const updatedArray = array.filter((item) => item.id !== id);
      setArray(updatedArray);
    }
    
    const handleEditClick = (id) => {
      const editedArray = array.filter((item) => {
        if(item.id === id){
          setTask(item.name);
          return false;
        } else {
          return true;
        }});
      setArray(editedArray);
    }

    return(
      <div>
        <div className = 'tasksection'>
          <input type = 'text' className = 'input-field' placeHolder = 'Try typing...' onChange = {handleChange}></input>
          <button className = 'task-button' onClick = {handleClick}>Push Task</button>
        </div>
        <div className='tasklist'>
        {
          array.map((value) => {
              return <div className='eachtask'>
                <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Checkbox color = 'primary' size = 'large' sx={{marginRight: '10px'}} />
                  <h2 className='eachtask-show'>{value.name}</h2>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <button className='eachtask-edit' onClick = {() => handleEditClick(value.id)} > Edit Task</button>
                  <button className='eachtask-delete' onClick = {() => handleDeleteClick(value.id)} > Pop Task</button>
                </div>
              </div>
          })
        }
        </div>
      </div>
    );
}


export default TaskSection;