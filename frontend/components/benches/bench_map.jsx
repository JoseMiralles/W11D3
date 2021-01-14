import React from "react";
import ReactDOM from "react-dom";

export default class BenchMap extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.55830278715352, lng: -77.47276612114392 },
            zoom: 13
        }

        const mapNode = ReactDOM.findDOMNode(this.refs.map);
        this.map = new google.maps.Map(mapNode, mapOptions);
    }

    render(){
        return(
            <div id="map-container" ref="map"></div>
        );
    }

}