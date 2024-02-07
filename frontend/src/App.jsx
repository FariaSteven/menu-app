import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landing from "./pages/landing/Landing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <>
      <Header scrollTop={scrollTop} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing setScrollTop={setScrollTop}/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
