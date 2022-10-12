import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import SubredditPagina from "./pages/subreddit/Subreddit"
import HomePagina from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return(
      <>
          <Header/>
           <Switch>
              <Route exact path="/">
                  <HomePagina/>
              </Route>
              <Route exact path="/subreddit/:id">
                  <SubredditPagina />
              </Route>
             </Switch>
          <Footer/>
      </>
  );
}
export default App;