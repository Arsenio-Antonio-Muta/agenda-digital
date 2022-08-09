import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MinhaAgenda from "./components/layout/MinhaAgenda";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { GlobalStorage } from './contexts/GlobalContext'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <GlobalStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/myagenda" element={<MinhaAgenda />} />
            </Routes>
          </main>
        </GlobalStorage>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;