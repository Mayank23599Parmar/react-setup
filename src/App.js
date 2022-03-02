import React from 'react';
/* Plugins */
import { Switch, Route } from 'react-router-dom';
/* Pages */
// import TodaApp from "./pages/home-page/Homepage";
import ExcelData from "./pages/ExcelData";
import GestEntry from "./pages/GestEntry";
class App extends React.Component {
 
 render() {
  return (
   <>
    <main className='main-content'>
     <Switch>
      <Route exact component={ExcelData} path='/' />
      <Route exact component={GestEntry} path='/guest-entry' />
     </Switch>
    </main>
   </>
  );
 }
}

export default App;
