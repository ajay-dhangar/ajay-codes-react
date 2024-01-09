import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages";
import Courses from "./pages/courses"
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hooks from "./hooks";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/ajay-codes-react" element={<Home />} />
                    <Route path="/ajay-codes-react/home" element={<Home />} />
                    <Route path="/ajay-codes-react/courses" element={<Courses />} />
                    <Route path="/ajay-codes-react/about" element={<About />} />
                    <Route path="/ajay-codes-react/contact" element={<Contact />} />
                    <Route path="/ajay-codes-react/courses/hooks" element={<Hooks />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
