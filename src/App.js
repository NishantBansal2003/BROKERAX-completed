import React from "react";
import Home from "./components/Home/Render file/RenderHomePage";
import AboutUs from "./components/About Us/Render file/RenderAboutUs";
import ContactUs from "./components/Contact Us/Render file/RenderContactUs";
import Markets from "./components/Markets/Render file/RenderMarket";
import Header from "./components/Header/Code/header";
 import SimpleFooter from "./components/Footer/Code/footer";
import LoginForm from "./components/login sign up/login";
import SignupForm from "./components/login sign up/sign up";
import RenderingDash from "./components/dashboard/renderdash";
import UserDetails from "./components/login sign up/render_dashboard";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";


export default function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div>
     <Router>
      <Routes>
      <Route
            exact
            path="/userDetails"
            element={isLoggedIn == "true" ? <UserDetails /> : <LoginForm />}
          />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/signin" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/AboutUs" element={<AboutUs/>} />
        <Route exact path="/Markets" element={<Markets/>} />
        <Route exact path="/ContactUs" element={<ContactUs/>} /> 
        <Route exact path="/SimpleFooter" element={<SimpleFooter/>} />
        <Route exact path="/RenderingDash" element={<RenderingDash/>} /> 
        </Routes>
      
      </Router>
    </div>
  );
}


