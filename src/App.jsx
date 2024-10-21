import React from "react";
import './App.css';
import './index.css';
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";

function App() {
  const pI = "https://www.perfecthair.ch/_next/image?url=https%3A%2F%2Fwww.perfecthair.ch%2Fmedia%2Fimage%2FBlog-Titelbild-9-standardgyBghUj57zT5w.jpg&w=1400&q=75";
  
  return (
    <div className="container">
      <div className="content-box"> 
        <div className="App">
          <Header image={pI} title="Welcome to the Product Page!" />
          <ProductForm />
        </div>
      </div>
    </div>
  );
}
export default App;
