var React = require('react');
var moltin = require('moltin')({
  publicId: 'QNhaJi0rbUMcliDZXxOFrgWQBtBewZLhirmNi7PnHg',
  secretKey: 'mbGEmOOOGrKZCL9eFNcDGW6SQ1EZa5oaU7qsQ4fPnx'
});

moltin.Authenticate(function() {
  console.log("test");
});

var Moltin = React.createClass({
  render: function () {
    return (
      <div>Moltin.jsx rendered</div>
    )
  }
});
module.exports = Moltin;
