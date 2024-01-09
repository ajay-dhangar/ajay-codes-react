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
                    <Route path="/react-01" element={<Home />} />
                    <Route path="/react-01/home" element={<Home />} />
                    <Route path="/react-01/courses" element={<Courses />} />
                    <Route path="/react-01/about" element={<About />} />
                    <Route path="/react-01/contact" element={<Contact />} />
                    <Route path="/react-01/courses/hooks" element={<Hooks />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
