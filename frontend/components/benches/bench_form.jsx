import React from "react";

export default class BenchForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            description: "",
            seating: 1,
            lat: 0,
            lng: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const benchFormData = { bench: Object.assign({}, this.state) } 
        this.props.createBench( benchFormData );
    }

    handleChange(key){
        return (e) => {
            this.setState({
                [key]: e.target.value
            });
        }
    }

    render(){
        return(
            <div>
                <h3>Create Bench</h3>

                <label> description:<br/>
                    <input onChange={this.handleChange("description")} type="text"/>
                </label>

                <br/><br/>

                <label> seats:<br/>
                    <input onChange={this.handleChange("seating")} type="nuber" min="1" max="10"/>
                </label>

                <br/><br/>

                <label> latitude:<br/>
                    <input onChange={this.handleChange("lat")} type="nuber" min="1" max="10"/>
                </label>

                <br/><br/>

                <label> longitude:<br/>
                    <input onChange={this.handleChange("lng")} type="nuber" min="1" max="10"/>
                </label>

                <br/><br/>

                <button onClick={this.handleClick}>submit</button>

            </div>
        );
    }

}