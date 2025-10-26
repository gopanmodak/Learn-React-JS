import React, { useState } from "react";
import NewToDo from "./NewToDo";

const Todos = () => {
   const [title, setTitle] = useState('');
   const [des, setDes] = useState('');
   const [todos, setTodos] = useState([]);

   let handleOnTitle = (a) => {
      setTitle(a.target.value);
   }

   let handleOnDescription = (a) => {
      setDes(a.target.value);
   }

   const handleSubmit = (s) => {
      s.preventDefault();

      let data = {
         title: title,
         des: des,
         id: Date.now() 
      }
      
      console.log(data);
      setTodos([...todos, data]);
      setTitle('');
      setDes('');
   }

   return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
         <form onSubmit={handleSubmit} style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
            <div>
               <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>Collect Data from a Form</h1>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
               <div>
                  <h5 style={{ margin: '0 0 8px 0', color: '#555', fontWeight: 'bold' }}>Title:</h5>
                  <input 
                     type="text" 
                     name="title" 
                     value={title} 
                     onChange={handleOnTitle}
                     style={{ 
                        width: '100%', 
                        padding: '10px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        fontSize: '16px',
                        boxSizing: 'border-box'
                     }}
                  />
               </div>
               
               <div>
                  <h5 style={{ margin: '0 0 8px 0', color: '#555', fontWeight: 'bold' }}>Description:</h5>
                  <textarea 
                     name="des" 
                     value={des}  
                     onChange={handleOnDescription}
                     style={{ 
                        width: '100%', 
                        padding: '10px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px', 
                        fontSize: '16px',
                        minHeight: '100px',
                        resize: 'vertical',
                        boxSizing: 'border-box'
                     }}
                  ></textarea>
               </div>
               
               <button 
                  type="submit"
                  style={{ 
                     backgroundColor: '#007bff',
                     color: 'white',
                     border: 'none',
                     padding: '12px 20px',
                     borderRadius: '4px',
                     fontSize: '16px',
                     cursor: 'pointer',
                     fontWeight: 'bold',
                     marginTop: '10px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
               >
                  Submit
               </button>
            </div>
         </form>

         <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Todos List</h2>
            {todos.length === 0 ? (
               <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>No todos yet. Add some above!</p>
            ) : (
               todos.map((todo) => (
                  <NewToDo 
                     key={todo.id} 
                     {...todo} 
                  />
               ))
            )}
         </div>
      </div>
   );
};

export default Todos;