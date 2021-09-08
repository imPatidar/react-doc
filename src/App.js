import './App.css';
import React from "react";
// import ReactDOM from "react-dom";

// const name = 'Pankaj';
// function formatUser(user){
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Pankaj',
//   lastName: 'Patidar'
// }
// const element = <h1>{formatUser(user)}</h1>;

// const element = React.createElement(
//     'h1',
//     'Hi',
//     formatUser(user)
// )

// function tick(){
//     const element = (
//         <div>
//             <h1>Hello World!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);


//Functional Component
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Pankaj" />;


//Class component

// Composing components
class Welcome extends React.Component{
    render() {
        return<h1>Hello, {this.props.name}</h1>;
    }
}

function App() {
    return(
        <div>
            <Welcome name="Pankaj"/>
            <Welcome name="Avinash"/>
        </div>
    );
}

export default App;
