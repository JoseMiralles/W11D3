import React from "react";
import ReactDOM from "react-dom";

import MarkerManager from "../../util/marker_manager";

export default class BenchMap extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.55830278715352, lng: -77.47276612114392 },
            zoom: 15
        }

        const mapNode = ReactDOM.findDOMNode(this.refs.map);
        this.map = new google.maps.Map(mapNode, mapOptions);
        this.markerManager = new MarkerManager(this.map);
        this.markerManager.updateMarkers(this.props.benches);
    }

    componentDidUpdate(){
        this.markerManager.updateMarkers(this.props.benches);
    }

    render(){
        return(
            <div id="map-container" ref="map"></div>
        );
    }

}