import React from "react";

import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";

export default class Search extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <BenchMap benches={this.props.benches} updateFilter={this.props.updateFilter} />
                <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches} />
            </div>
        );
    }

} 