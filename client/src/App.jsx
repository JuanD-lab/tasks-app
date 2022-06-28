import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import TaskContainer from "./Components/Home/TaskContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<TaskContainer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
