import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index, Layout, SignIn } from "./Components";

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
          <Route exact path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
