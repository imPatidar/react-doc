import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, key: 4},
            {id: 2, key: 0},
            {id: 3, key: 2},
            {id: 4, key: 0},
        ]
    }

    handleDelete = (counterId) => {
        // console.log("Event handler called", counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter = {counter}
                    />
                )}
            </div>
        );
    }
}

export default Counters;
