import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount(){
        this.setState({ count: 1});

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component Di Update");
        if (this.state.count === 10) {
            this.setState({ count: 5});
        }
    }
    render() {
        return (
            <div className="flex items-center mb-5">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="bg-black text-white p-2" onClick={() => this.setState({ count: this.state.count + 1})} 
                >
                    +
                </button>
            </div>
        )
    }
}

export default Counter;