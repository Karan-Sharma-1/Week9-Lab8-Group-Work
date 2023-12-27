import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./app.css";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Registration from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
 
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="services" element={<Services />} />
      <Route path="tours" element={<Tours />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Registration />} />
      <Route path="*" element={<NotFound />} /> 
    </Route>
   
  </Routes>
 
</BrowserRouter>

  );
}

export default App;
