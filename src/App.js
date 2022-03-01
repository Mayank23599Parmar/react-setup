import React from 'react';
/* Plugins */
import { Switch, Route } from 'react-router-dom';
/* Pages */
import TodaApp from "./pages/home-page/Homepage";
import ExcelData from "./pages/ExcelData";
class App extends React.Component {
 
 render() {
  return (
   <>
    <main className='main-content'>
     <Switch>
      <Route exact component={ExcelData} path='/' />
     </Switch>
    </main>
   </>
  );
 }
}

export default App;
