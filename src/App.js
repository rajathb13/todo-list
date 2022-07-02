import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo-list" element={<TodoList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
