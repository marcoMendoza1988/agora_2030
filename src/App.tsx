import React from "react";
import Home from "./components/templates/Home";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Blog from "./components/templates/Blog";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import HelpComponent from "./components/organisms/HelpComponent";
import PageUnderConstruction from "./components/templates/PageUnderConstruction";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <HelpComponent />
      <Routes>
        <Route index element={<Home />} />  
        <Route path="/blog" element={<Blog />} />  
        <Route path="*" element={<PageUnderConstruction /> } />
      </Routes> 
      <Footer />
    </BrowserRouter>
  )
}

export default App
