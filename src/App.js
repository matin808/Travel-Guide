import "./App.css";
import Navbar from "../src/assests/components/Navbar";
import Main from "../src/assests/components/Main";
import Footer from "../src/assests/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./assests/components/Header/Header";
import List from "./assests/components/List/List";
import Map from "./assests/components/Map/Map";
 import {  Grid } from '@material-ui/core';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/info">
            <Navbar />
           
            <Footer />
          </Route>
          <Route path="/advisor">
          <CssBaseline />
          <Header />
          <Grid container spacing = {3} style = {{ width : '100%'}}>
              <Grid item xs = {12} md = {4}>
                  <List />
              </Grid>
              <Grid item xs = {12} md = {8}>
                <Map />
              </Grid>
             </Grid>
            
          
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
