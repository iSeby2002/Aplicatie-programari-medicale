import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css"
import {CssBaseline} from "@mui/material";
import LoginPage from "./components/loginComponents/LoginPage";
import RegisterPage from "./components/adminComponents/registerComponents/RegisterPage";
import EditarePage from "./components/adminComponents/editareComponents/EditarePage";
import FisaMedicalaPage from "./components/fisaMedicalaComponents/FisaMedicalaPage";
import PrivateRoutes from "./utils/PrivateRoutes"
import AdminPage from "./components/adminComponents/AdminPage";
import SchimbareParolaPage from "./components/adminComponents/schimbareParolaComponents/SchimbareParolaPage";
import CalendarPage from "./components/calendarComponents/CalendarPage";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<PrivateRoutes />}>
                        <Route path="/DiabetologPage" element={<CalendarPage />} exact/>
                        <Route path="/OftalmologPage" element={<CalendarPage />} exact/>
                        <Route path="/DiabetologPage/VizualizareScreening" element={<FisaMedicalaPage />} exact/>
                        <Route path="/OftalmologPage/CompletareScreening" element={<FisaMedicalaPage />} exact/>
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
