

export default class MarkerManager {

    constructor(map) {
        this.map = map;
        this.markers = new Object();
    }

    // This method runs every time the "benches" slice in state gets updated.
    // It adds and removes benches on the map.
    updateMarkers(benches){

        // Convert the benches array into an object with id's as keys => { 3: {description: "awfe" ...}, 5: {...}, ... }
        const benchHash = benches.map(bench => { return { [bench.id]: bench }});
        
        // Delete the markers that aren't in the new benches state.
        Object.keys(this.markers).forEach( key => {
            if (!benchHash[key]) {
                this.markers[key].setMap(null); // Remove from map, by setting it's map property to null.
                delete this.markers[key]; // Remove from the markers object as well.
            }
        });

        // Create new markers for benches that aren't yet in the map.
        benches.forEach(bench => {
            if (!this.markers[bench.id]){
                this.markers[bench.id] = this.createMarkerFromBench(bench);
            }
        });
    }

    createMarkerFromBench(bench){
        return new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng},
            map: this.map,
            title: bench.description
        });
    }

    

}