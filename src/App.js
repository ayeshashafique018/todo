import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Optsignup from './Optsignup';
import logo from './img/logo_todo_clear-removebg-preview.png';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [searchMode, setSearchMode] = useState(false);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
      setSearchMode(false); // Ensure that search mode is reset after adding
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleSearch = () => {
    setSearchMode(true);
  };

  const filteredTodos = todos
    .filter(todo => {
      // Filtering based on the search input
      if (searchMode) {
        return todo.text.toLowerCase().includes(inputValue.toLowerCase());
      }
      // Filtering based on the selected filter
      if (filter === "active") return !todo.completed;
      if (filter === "complete") return todo.completed;
      return true; // For "all" filter or any other cases
    });

  return (
    <Router>
      <div className="app-container">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-sm custom-navbar">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ height: '30px', width: 'auto' }} />
          </Link>
          <div className="navbar-text ms-3">Todo </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link to="/login" className="btn btn-p ms-3">Login</Link>
              <Link to="/signup" className="btn btn-p ms-3">Signup</Link>
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="todo-container">
                  <h1 className="text-center mb-4 mt-4">Todo List</h1>
                  <div className="todo-input d-flex">
                    <input
                      type="text"
                      placeholder="Enter a new todo or search..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={addTodo} className="btn btn-add ms-2">
                      Add Todo
                    </button>
                    <button onClick={handleSearch} className="btn btn-search ms-2">
                      <i className="fa fa-search"></i> 
                    </button>
                  </div>

                  <div className="todo-filters mt-3">
                    <button
                      className={filter === "all" ? "active" : ""}
                      onClick={() => {
                        setFilter("all");
                        setSearchMode(false); // Reset search mode when changing filter
                      }}
                    >
                      All
                    </button>
                    <button
                      className={filter === "active" ? "active" : ""}
                      onClick={() => {
                        setFilter("active");
                        setSearchMode(false); // Reset search mode when changing filter
                      }}
                    >
                      Active
                    </button>
                    <button
                      className={filter === "complete" ? "active" : ""}
                      onClick={() => {
                        setFilter("complete");
                        setSearchMode(false); // Reset search mode when changing filter
                      }}
                    >
                      Complete
                    </button>
                  </div>

                  <ul className="list-group my-4">
                    {filteredTodos.length > 0 ? (
                      filteredTodos.map((todo, index) => (
                        <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                          <input
                            type="text"
                            value={todo.text}
                            onChange={(e) => updateTodo(index, e.target.value)}
                            disabled={todo.completed}
                          />
                          <div className="d-flex align-items-center">
                            <button
                              className={`btn ${todo.completed ? "btn-undo" : "btn-done"} btn-sm me-2`}
                              onClick={() => toggleTodo(index)}
                            >
                              <i className={`fa ${todo.completed ? "fa-times" : "fa-check"}`}></i>
                            </button>
                            <button
                              className="btn btn-remove btn-sm"
                              onClick={() => removeTodo(index)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="text-center">No tasks found</li>
                    )}
                  </ul>
                </div>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/optsignup" element={<Optsignup />} />
          </Routes>
        </div>

        {/* Footer Start */}
        <div className="container-fluid bg-dark px-5">
          <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                <small className="text-light">
                  Made by Ayesha Shafique
                </small>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" 
                   href="https://www.facebook.com/people/Ayesha-Shafique/pfbid02wN5pYfykTmpcnjPHv1gkeABev7mC6uz6ASVXSvG9hpBsFJTtXVnuRD6DtTpzS5iJl/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f fw-normal"></i>
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" 
                   href="https://www.linkedin.com/in/ayesha-shafique-2a786a194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in fw-normal"></i>
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" 
                   href="https://www.instagram.com/speak_peak_/?igsh=c3B0MHdtN2xraXNm" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fw-normal"></i>
                </a>
                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/@speak_peak_">
                  <i className="fab fa-youtube fw-normal"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>
    </Router>
  );
}

export default App;
