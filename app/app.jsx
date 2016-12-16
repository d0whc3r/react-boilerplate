var React = require('react');
var ReactDOM = require('react-dom');

var ob1 = {
    name: 'me',
    location: 'asdf'
};

var ob2 = {
    age: 24,
    ...ob1
};

console.log(ob2);

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById('app')
);