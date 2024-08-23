import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
       <Header />
       {/* <Navigation /> */}
      <Layout />
    </Router>
  );
}

export default App;
