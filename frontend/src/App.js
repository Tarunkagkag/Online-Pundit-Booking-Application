
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";

import GaneshPooja from "./components/poojas/GaneshPooja";
import LakshmiPooja from "./components/poojas/LakshmiPooja";
import SatyanarayanPooja from "./components/poojas/SatyanarayanPooja";
import Rudrabhishek from "./components/poojas/Rudrabhishek";
import NavagrahaPooja from "./components/poojas/NavagrahaPooja";
import MahaMrityunjayaPooja from "./components/poojas/MahaMrityunjayaPooja";
import Privacy from "./components/Footer/privacy"
import Terms from "./components/Footer/terms"
import GaneshPoojaa from "./blog/GaneshPoojaa"
import VerifyOTP from "./pages/VerifyOTP";
import PunditDashboard from "./pages/PunditDashboard";
import styles from "./styles.css";
import Stairs from "./components/common/Stairs";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* <Navbar />   ✅ Navbar always visible */}

          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Login" element={<Login />} />
          
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/ganesh-pooja" element={<GaneshPooja />} />
            <Route path="/lakshmi-pooja" element={<LakshmiPooja />} />
            <Route path="/satyanarayan-pooja" element={<SatyanarayanPooja />} />
            <Route path="/rudrabhishek" element={<Rudrabhishek />} />
            <Route path="/navagraha-pooja" element={<NavagrahaPooja />} />
            <Route path="/mahamrityunjaya-pooja" element={<MahaMrityunjayaPooja />}/>
            <Route path="/ganesh-pooja-blog" element={<GaneshPoojaa />}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/pundit-dashboard" element={<PunditDashboard />} />


      
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
