import React from "react";
import BenchIndexItem from "./bench_index_item";

export default class BenchIndex extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // const filters = {
        //     lat: 
        // }
        this.props.fetchBenches();
    }

    render(){
        const mappedBenches = this.props.benches.map((bench) => {
            return <BenchIndexItem key={bench.id} bench={bench} />
        });

        return( <div><ul>{mappedBenches}</ul></div> );
    }

}