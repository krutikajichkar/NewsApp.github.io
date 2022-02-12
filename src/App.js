
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
 let[progress , setProgress] = useState(0)

  const changeProgress = (progress) => {
  setProgress(progress) 
  }

    return (

      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />
        <Switch>
          <Route  exact path="/business">
          <News setProgress={changeProgress}  pageSize={9} key="business" country='us' category='business'/>
          </Route>
          <Route exact path="/">
          <News setProgress={changeProgress}  pageSize={9} key="general" country='us' category='general'/>
          </Route>
          <Route exact path="/sports">
          <News setProgress={changeProgress}  pageSize={9} key="sports" country='us' category='sports'/>
          </Route>
          <Route exact path="/entertainment">
          <News setProgress={changeProgress}  pageSize={9} key="entertainment" country='us' category='entertainment'/>
          </Route>
          <Route exact path="/technology">
          <News setProgress={changeProgress}  pageSize={9} key="technology" country='us' category='technology'/>
          </Route>
          <Route exact path="/health">
          <News setProgress={changeProgress}  pageSize={9} key="health" country='us' category='health'/>
          </Route>
          <Route exact path="/science">
          <News setProgress={changeProgress}  pageSize={9} key="science" country='us' category='science'/>
          </Route>
        </Switch>
        </Router>
      </div>
    );
  
}

export default App;
