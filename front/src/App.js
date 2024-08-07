import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import {CssBaseline} from "@mui/material";
import LoginPage from "./components/loginComponents/LoginPage";
import RegisterPage from "./components/adminComponents/registerComponents/RegisterPage";
import EditarePage from "./components/adminComponents/editareComponents/EditarePage";
import DiabetologPage from "./components/diabetComponents/DiabetologPage";
import OftalmologPage from "./components/oftalmologicComponents/OftalmologPage";
import PrivateRoutes from "./utils/PrivateRoutes"
import AdminPage from "./components/adminComponents/AdminPage";
import SchimbareParolaPage from "./components/adminComponents/schimbareParolaComponents/SchimbareParolaPage";

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
                        <Route path="/AdminPage/RegisterPage" element={<RegisterPage />} />
                        <Route path="/AdminPage/EditarePage" element={<EditarePage />} />
                        <Route path="/AdminPage/EditarePage/SchimbareParolaPage" element={<SchimbareParolaPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
