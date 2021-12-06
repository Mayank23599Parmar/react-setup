import React, { Component } from 'react';
import SrcSet from "../SrcSet";
import { networking, linechart, user } from "../Images";
class HomeBlockList extends Component {

    render() {
        let HomeBlockListData = [
            {
                image: networking,
                title: "Real time collaboration",
                data: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere. "
            },
            {
                image: user,
                title: "Account manager",
                data: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere. "
            },
            {
                image: linechart,
                title: "Marketing plan",
                data: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere. "
            }
        ]
        return (
            <div className="home-block-list-wrapper">
                <div className="home-blocks">
                    {
                        HomeBlockListData.map((item, index) => {
                            return <div className="block" key={index}>
                                <div className="image">
                                    <SrcSet image={{src:item.image}}/>
                                </div>
                                <div className="block-data">
                                    <h3>{item.title}</h3>
                                    <div className="block-dec">
                                        <p>{item.data}</p>
                                        </div>
                                    </div>
                            </div>
                        })

                    }

                </div>
            </div>
        );
    }
}

export default HomeBlockList;