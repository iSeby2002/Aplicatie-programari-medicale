import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import {CssBaseline} from "@mui/material";
import LoginPage from "./components/loginComponents/LoginPage";
import RegisterPage from "./components/registerComponents/RegisterPage";
import DiabetologPage from "./components/diabetComponents/DiabetologPage";
import OftalmologPage from "./components/oftalmologicComponents/OftalmologPage";
import PrivateRoutes from "./utils/PrivateRoutes"
import AdminPage from "./components/adminComponent/AdminPage";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/DiabetologPage" element={<DiabetologPage />} exact/>
                        <Route path="/OftalmologPage" element={<OftalmologPage />} exact/>
                        <Route path="/AdminPage" element={<AdminPage />} />
                        <Route path="/RegisterPage" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
