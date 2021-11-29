import React, { Component } from "react";
import MediaQuery from "../../components/MediaQuery";

class HomePage extends Component {
    render() {

        return (
            <div id="footer">
                <MediaQuery query="phone-and-tablet">
                    <h1>Home page for Mobile and tablet</h1>
                </MediaQuery>
                <MediaQuery query="lap-and-up">
                    <h1>Home page for big screen</h1>
                </MediaQuery>

                <p>matagg f3fd3hf3h30h3 f3f3f</p>
                <button className="btn">Get started</button>
            </div>
        );
    }
}

export default HomePage;
