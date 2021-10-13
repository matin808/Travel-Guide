import "./App.css";
import Navbar from "../src/assests/components/Navbar";
import Main from "../src/assests/components/Main";
import Footer from "../src/assests/components/Footer";
import TravelReviews from "../src/assests/components/TravelReviews";
import TravelForm from "../src/assests/components/TravelForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/info">
            <Navbar />
            <Footer />
          </Route>
          <Route path="/travel-form">
          <Navbar />  
          <TravelForm />      
          </Route>
          <Route path="/advisor">
          <Navbar />  
          <TravelReviews />      
          </Route>
          <Route path="/">
            <Navbar />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
