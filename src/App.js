import React from 'react';
/* Plugins */
import { Switch, Route } from 'react-router-dom';
/* Components imports */
import Header from './components/header/Header';
// import SideCart from './components/SideCart/SideCart';
import Footer from './components/Footer/Footer';

/* Pages */
import HomePage from "./pages/home-page/Homepage";

class App extends React.Component {
 
 render() {
  return (
   <>
    <Header />
    <main className='main-content'>
     <Switch>
      <Route exact component={HomePage} path='/' />
  
    
     </Switch>
    </main>
    <Footer />
   </>
  );
 }
}

export default App;
