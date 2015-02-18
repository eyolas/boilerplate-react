
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Home = require('./views/home.jsx');
var About = require('./views/about.jsx');
var Master = require('./components/master.jsx');



/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  *
  * Routes are used to declare your view hierarchy.
  *
  */
var AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <Route name="about" handler={About} />
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = AppRoutes;
