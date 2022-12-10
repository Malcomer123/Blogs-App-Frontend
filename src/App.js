import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./Components";
import SignIn from "./Components/SignIn";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="blog" element={<div>hi</div>} />
            <Route path="roar" element={<div>oktazt</div>} />
          </Route>
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
