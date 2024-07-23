import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import {CssBaseline} from "@mui/material";
import LoginPage from "./components/loginComponents/LoginPage";
import RegisterPage from "./components/registerComponents/RegisterPage";
import DiabetologPage from "./components/diabetComponents/DiabetologPage";
import OftalmologPage from "./components/oftalmologicComponents/OftalmologPage";


function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/RegisterPage" element={<RegisterPage />} />
                    <Route path="/DiabetologPage" element={<DiabetologPage />} />
                    <Route path="/OftalmologPage" element={<OftalmologPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
