import React from "react";
import { Blog, Features, Footer, Header, OurCompany, Solutions } from './containers';
import { Brand, CTA, Navbar} from './components';
import './App.css';

function App() {
    return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <OurCompany />
        <Features />
        <Solutions />
        <CTA />
        <Blog />
        <Footer />
      </div>
    );
  }
  
  export default App;