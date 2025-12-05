import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import logo
import logo from "./MInd Lift.jpg";
import "./App.css";
// import pages so the page will appear
import Home from "./Views/Home";
import Workshop from "./Views/Workshop";
import BlankPage from "./Views/BlankPage";

const App = () => (
  /* Router allows us to route between different pages */
  <Router>
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: 300, height: 250, marginBottom: 20 }}
        />{" "}
        {/* Setting up navigation bar */}
        <nav className="App-nav">
          <Link to="/">Home</Link>
          <Link to="/workshop">Help</Link>
          <Link to="/blankPage"> Tips</Link>

          {/* Add another route here... 
               <Link to="/workshop">Customers</Link>
          */}
        </nav>
        {/* Setting up routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/blankPage" element={<BlankPage />} />
          {/* Add another route here... 
           <Route path="/workshop" element={<Customers />} />
          */}
        </Routes>
      </header>
    </div>
  </Router>
);

export default App;
