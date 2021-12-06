import React, { Component } from "react";
import HomeBlock from "../../components/home/HomeBlock";
import HomeBlockList from "../../components/home/HomeBlockList";
import PriceTable from "../../components/home/PriceTable";
class HomePage extends Component {
    render() {

        return (
          <>
          <HomeBlock/>
          <HomeBlockList/>
          <PriceTable/>
          
          </>
        );
    }
}

export default HomePage;
