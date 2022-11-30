import logo from './logo.svg';
import './App.css';
import {Todo} from './components/ToDo';

function App() {
  return (
    <div className="App">
      <h1> Task Manager</h1>
      <Todo/>
    </div>
  );
}

export default App;
