// import '../public/styles/main.css';
import React, { Component } from "react";
import Header from "./layout/Header";
import Home from "./container/Home";
import Footer from "./layout/Footer";

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );  
  }
}

export default App;
