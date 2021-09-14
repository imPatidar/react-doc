import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state={
        counters:[
            {id: 1, key: 0},
            {id: 2, key: 0},
            {id: 3, key: 0},
            {id: 4, key: 0},
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter key={counter.id} />)}
            </div>
        );
    }
}

export default Counters;
