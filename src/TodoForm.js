import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [value, setValue] = useState('');

  const handleAddClick = () => {
    if (value.trim()) {
      addTask(value);
      setValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default TodoForm;
