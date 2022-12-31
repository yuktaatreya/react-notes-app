import './components/note.js';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
    render(){
        return(
            <Note></Note>
        );
    }
}
class Note extends React.Component{
    render(){
        return(
            <div className="border border-dark rounded">
            Hello World!
            </div>
        );
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Home />;
// root.render(element);