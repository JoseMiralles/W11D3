
export const fetchBenches = ( filters ) => {
    return $.ajax({
        method: "GET",
        url: "/api/benches",
        data: filters
    });
}

// Query to test index filter
// $.ajax({
//     method: "GET",
//     url: "/api/benches",
//     data: { 
//         bounds: { 
//             southWest: { lat: 37.554957226606774, lng: -77.47526029602743 },
//             northEast: { lat: 37.56070650091237, lng: -77.46843228268627 }
//         }
//     }
// });