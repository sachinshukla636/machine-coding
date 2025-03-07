import { Routes, Route, Link } from "react-router-dom";
import Accordion from "./accordion";
import "./App.css";

function App() {
  return (
    <>
      <h1>Machine Coding</h1>
      <nav>
        <ul>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </>
  );
}

export default App;
