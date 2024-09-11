// import React from 'react';
// import CartProvider from './CartContext'; // Correct default import
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AddedProduct from './AddedProduct';
// import Product from './Product';

// function App() {
//   return (
//     <CartProvider>
//       {/* Ensure CartProvider wraps Router */}
//       <Router>
//         <Routes>
//           <Route path="/" element={<AddedProduct />} />
//           <Route path="/added-products" element={<Product />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Unique ID for each task
      text: taskText,
      isCompleted: false, // Initially set to not completed
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      <h1>Task List</h1>
      <TodoList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
      <TodoForm addTask={addTask} />
    </div>
  );
}

export default App;
