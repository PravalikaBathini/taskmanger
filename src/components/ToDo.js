import {useState} from "react";


export const  Todo=()=>{
    const[currentTask,setCurrentTask]=useState('');
    const[allTasks,setAllTasks]=useState([]);
    const[editingIndex,setEditingIndex]=useState(undefined);
    const[DeletingIndex,setDeletingIndex]=useState('');
    
    const handleOnChange=(event)=>{
        if(event.target.value.length>10) return;
        setCurrentTask(event.target.value)
    }
    const handleOnClick=()=>{
      const isAddingNeTask=editingIndex==undefined;
      if(isAddingNeTask){
      if(currentTask.length>0){
    setAllTasks([...allTasks,currentTask])
    setCurrentTask('')
      }
    }
    else{
      const allOldtask=[...allTasks];
      allOldtask[editingIndex]=currentTask;
      setAllTasks(allOldtask);
      setCurrentTask('');
    }
  }
const handleEdit=(index)=>{
  setEditingIndex(index);
  setCurrentTask(allTasks[index]);

}
    const handleDelete=(index)=>{
      allTasks.splice(index);
      
   
      setCurrentTask([]);
    }
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:500,marginTop:50}} >

<div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only"></label>
    <input type="text" className="form-control"  placeholder="Add Task" value={currentTask} onChange={handleOnChange}/>
  </div>
  <button type="submit" className="btn btn-primary mb-2" onClick={handleOnClick}>Add Task</button>
        </div>
        </div>
        <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>{
    allTasks.map((task,index)=>{
        return(
            <tr>
      <th scope="row">{index+1}</th>
      <td>{task}</td>
      <td>
        <button className="btn btn-secondary"
        onClick={()=>handleEdit(index)}>Edit</button>
        <button className="btn btn-danger"
        onClick={()=>handleDelete(index)}>Delete</button>
      </td>
     
    </tr>

        )
        })
    }
    
    
  </tbody>
</table>
     
        </>
    )
}