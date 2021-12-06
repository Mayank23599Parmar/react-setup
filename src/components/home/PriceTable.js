import React, { Component } from 'react';
import { price1, price2, price3 } from "../Images";
import SrcSet from "../SrcSet";
class PriceTable extends Component {

    render() {
        let priceData = [
            {
                title: "STARTER",
                Image: price1,
                price: "$138",
                data: ["Advanced security", "Change management", "Implementation services", "Apps and integrations"]
            },
            {
                title: "BASIC",
                Image: price2,
                price: "$138",
                data: ["Advanced security", "Change management", "Implementation services", "Apps and integrations"]
            },
            {
                title: "PREMIUM",
                Image: price3,
                price: "$138",
                data: ["Advanced security", "Change management", "Implementation services", "Apps and integrations"]
            }
        ]
        return (
            <div className="pricing-table-warpper">
                <div className="sub-text-wrapper">
                    <p className="sub-text">PRICING TABLES</p>
                </div>
                <h3 className="title">How much does it cost</h3>
                <div className="dec">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                </div>

                <div className="price-table">
                    <div className="price-blocks-wrapper">
                        {
                            priceData.map((item, index) => {
                                return <div className="block-wrapper">
                                      <div className="price-title">
                                          <h3 >{item.title}</h3>
                                          </div>
                                          <div className="image">
                                          <SrcSet image={{src:item.Image}}/>
                                              </div>
                                              <h3 className="price">{item.price}</h3>
                                              <ul className="servis">
                                                  {
                                                      item.data.map((cv,i)=>{
                                                          return <li>{cv}</li>
                                                      })
                                                  }
                                              </ul>
                                              <div className="price-button">

                                              <button className="btn ">Purchase</button>
                                              </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default PriceTable;