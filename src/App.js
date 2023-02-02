import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";
import PrivateRoutes from "./components/PrivateRoutes";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<PrivateRoutes />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
