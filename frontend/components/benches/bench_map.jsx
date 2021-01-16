import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import { updateBounds } from "../../actions/filter_actions";
import MarkerManager from "../../util/marker_manager";

class BenchMap extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
        });
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

        window.map = this.map;
        
        this.map.addListener("idle", () => {
            // Format the bounds as needed by "updateBounds()"
            const bounds = this.map.getBounds();
            const northEast = bounds.getNorthEast();
            const southWest = bounds.getSouthWest();
            const formattedBounds = {
                northEast: { lat: northEast.lat(), lng: northEast.lng() },
                southWest: { lat: southWest.lat(), lng: southWest.lng() }
            }
            this.props.updateFilter("bounds", formattedBounds);
        });

        this.map.addListener("click", this.handleClick);
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

export default withRouter(BenchMap);