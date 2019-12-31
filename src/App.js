import React from 'react';
import TodoItem from './components/TodoItem'
function App() {
  return (
    <div className="App">
        <TodoItem title="Đá bóng" />      
        <TodoItem title="Cầu long" />      
        <TodoItem title="Bóng chuyền" />      
    </div>
  );
}

export default App;
