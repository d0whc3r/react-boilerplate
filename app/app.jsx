var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

$(document).foundation();

// App scss
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boilerplate react</p>,
    document.getElementById('app')
);