import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Eduventures from "./componenets/Eduventures";

function App() {
  return (

    <Router>

      <Routes>

        <Route path="/" element={<Eduventures/>}/>

      </Routes>

    </Router>
  );
}

export default App;
