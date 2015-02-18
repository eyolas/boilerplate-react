var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Menu = require('./menu');

var Master = React.createClass({

  render: function() {

    return (
        <div>
          <Menu ref="leftNav" />
          <RouteHandler />
        </div>
    );
  }

});

module.exports = Master;
