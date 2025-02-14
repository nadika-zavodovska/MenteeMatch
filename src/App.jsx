import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />            
            </Routes>
        </>
    );
}

export default App;
