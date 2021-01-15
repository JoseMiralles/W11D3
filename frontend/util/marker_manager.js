

export default class MarkerManager {

    constructor(map) {
        this.map = map;
        this.markers = new Object();
    }

    updateMarkers(benches){
        benches.forEach(bench => {
            if (!this.markers[bench.id]){
                this.markers[bench.id] = bench;
                this.createMarkerFromBench(bench);
            }
        });
    }

    createMarkerFromBench(bench){
        new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng},
            map: this.map,
            title: bench.description
        });
    }

}