var React = require('react'),
  Link = require('react-router').Link;

var Menu = React.createClass({


  render: function() {
    return (
      <div className='menu'>
        <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
      </div>
    );
  }

});

module.exports = Menu;
