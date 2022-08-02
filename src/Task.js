import React from "react";

function Task(props) {
  const {id,desc,isChecked,handleCheck} = props
  return (
    <>
      <label>
        <input type="checkbox"  id={id} defaultChecked={isChecked} onClick={(e)=>handleCheck(id,desc,e.target.checked)}  />
        {desc}
      </label>
      <br/>
    </>
  );
}

export default Task;
