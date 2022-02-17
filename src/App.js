import React from 'react';
/* Plugins */
import { Switch, Route } from 'react-router-dom';
/* Pages */
import TodaApp from "./pages/home-page/Homepage";
class App extends React.Component {
 
 render() {
  return (
   <>
    <main className='main-content'>
     <Switch>
      <Route exact component={TodaApp} path='/' />
     </Switch>
    </main>
   </>
  );
 }
}

export default App;
