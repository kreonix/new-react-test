import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import {Home} from "./pages";
import {ActionStateTestPage} from "./pages/ActionStateTestPage.tsx";

function App() {
  return (
    <>
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/action-state-test">ActionStateTestPage</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/action-state-test" element={<ActionStateTestPage/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
