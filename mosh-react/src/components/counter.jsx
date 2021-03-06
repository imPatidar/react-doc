import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.key
    };

    handleIncrement = () => {
        // console.log(this.state.value);
        this.setState({value: this.state.value + 1})
    };


    // renderTags(){
    //     if(this.state.value === 0) return <p>"There are no tags!</p>;
    //
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value
    }

    render() {
        // console.log("props", this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.count === 0 && "There are no tags!"}
            </div>
        );
    }
}

export default Counter;
