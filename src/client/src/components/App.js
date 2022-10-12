import {Switch, Route, BrowserRouter  } from "react-router-dom";
import AddIssue from "./AddIssue";
import IssuePage from './IssuePage';
import React from 'react';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path = "/addissue" component={AddIssue}/>
      <Route exact path = "/" component={IssuePage} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
