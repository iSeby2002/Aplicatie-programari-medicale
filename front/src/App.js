import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import {CssBaseline} from "@mui/material";
import LoginPage from "./components/loginComponents/LoginPage";
import RegisterPage from "./components/registerComponents/RegisterPage";
import DiabetologPage from "./components/diabetComponents/DiabetologPage";
import OftalmologPage from "./components/oftalmologicComponents/OftalmologPage";
import PrivateRoutes from "./utils/PrivateRoutes"

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/RegisterPage" element={<RegisterPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/DiabetologPage" element={<DiabetologPage />} exact/>
                        <Route path="/OftalmologPage" element={<OftalmologPage />} exact/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
