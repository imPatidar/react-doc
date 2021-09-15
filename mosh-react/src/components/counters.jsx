import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state={
        counters:[
            {id: 1, key: 4},
            {id: 2, key: 0},
            {id: 3, key: 2},
            {id: 4, key: 0},
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter key={counter.id} value={counter.key} selected/>)}
            </div>
        );
    }
}

export default Counters;
