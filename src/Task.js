import "./Task.css";
import React, { useState } from "react";

function Task(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { id, desc, isChecked, updateTask } = props;

  function handleChecked(e) {
    console.info("highlight active");
    setIsHighlighted(true);
    setTimeout(() => {
      console.info("non highlight active");
      setIsHighlighted(false);
    }, 500);
    updateTask(id, desc, e.target.checked);
  }

  return (
    <>
      <label className={isHighlighted ? "highlight" : "nonHighlight"}>
        <input
          type="checkbox"
          id={id}
          defaultChecked={isChecked}
          onClick={handleChecked}
        />
        {desc}
      </label>
      <br />
    </>
  );
}

export default Task;
