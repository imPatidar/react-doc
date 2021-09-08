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
// class Welcome extends React.Component{
//     render() {
//         return<h1>Hello, {this.props.name}</h1>;
//     }
// }

//Extracting Components

// function formatDate(date) {
//     return date.toLocaleDateString();
// }
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Pankaj',
//         avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };
//
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name}
//         />
//     );
// }
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
// function Comment(props){
//     return(
//         <div className="Comment">
//             <UserInfo user={props.author}/>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     )
// }
// function App() {
//     return(
//         <Comment
//             date={comment.date}
//             text={comment.text}
//             author={comment.author}
//         />
//     );
// }

//Clock Rendering with state

// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//     render() {
//         return (
//             <div>
//                 <h1> Hello</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

//Clock rendering each second
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render() {
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App(){
    return(
        <Clock />
    )
}
export default App;
