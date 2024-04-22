import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import SingleProperty from "./pages/SingleProperty";
import Properties from "./pages/Properties";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/properties" element={<PrivateRoute />}>
          <Route path="/properties" element={<Properties />} />
        </Route>
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/property/:id" element={<PrivateRoute />}>
          <Route path="/property/:id" element={<SingleProperty />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
