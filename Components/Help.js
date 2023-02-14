import { Component } from "react";

class Help extends Component {
    constructor(){
        super();
        this.state= {
            name:"Food order"
        }
    }

    render(){
        <div>
            <h4>For any help, contact the support team.</h4>
            <h5>Dial to 123456789</h5>
        </div>
    }
}

export default Help;