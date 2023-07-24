import React from "react";
import "./App.css";
import SeeVideo from "./components/SeeVideo/SeeVideo";
import Video from "./views/Video/Video";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App p-5 sm:p-10 border max-w-screen-md m-auto">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<SeeVideo />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
