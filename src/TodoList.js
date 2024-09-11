import React, { useState } from 'react';

function TodoList({ tasks, editTask, deleteTask, toggleCompleted }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}

function TodoItem({ task, editTask, deleteTask, toggleCompleted }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <div style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
      {isEdit ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              if (newText.trim()) {
                editTask(task.id, newText);
                setIsEdit(false);
              }
            }}
          >
            Save
          </button>
          <button onClick={() => setIsEdit(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{task.text}</p>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => toggleCompleted(task.id)}>
            {task.isCompleted ? 'Undo' : 'Complete'}
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
