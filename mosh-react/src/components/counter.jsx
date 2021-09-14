import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = () => {
        console.log('Increment Clicked', this);
    }


    renderTags(){
        if(this.state.tags.length === 0) return <p>"There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return (
            <div>
                {/*<span className={this.getBadgeClasses()}>{this.formatCount()}</span>*/}
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                {this.state.tags.length===0 && "There are no tags!"}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;
