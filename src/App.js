import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";


function App() {
  return (
    <>
    <Router>
      <Header>
  
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
