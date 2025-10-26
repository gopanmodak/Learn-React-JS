import React from 'react'

const NewToDo = (props) => {
   return (
      <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
         <p><strong>Title:</strong> {props.title}</p>
         <p><strong>Description:</strong> {props.des}</p>
      </div>
   )
}

export default NewToDo