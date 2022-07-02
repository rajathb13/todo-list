import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from './components/todoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
