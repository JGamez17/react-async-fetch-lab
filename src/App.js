// create your App component that returns a list of people currently in space.

import React, { Component } from "react";

class App extends React.Component {

    state = {
        peopleInSpace: [],
    };


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then((response) => response.json())
            .then((data) => console.log(data))
        // this.setState({
        //     peopleInSpace: data.people,
    }

    render() {
        return (

            <div>
                <h1>  "peopleInSpace"   </h1>

            </div >
        )
    }
}

export default App; 