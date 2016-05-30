var React = require("react");
var moltin = require("moltin")({
  publicId: 'QNhaJi0rbUMcliDZXxOFrgWQBtBewZLhirmNi7PnHg',
  secretKey: 'mbGEmOOOGrKZCL9eFNcDGW6SQ1EZa5oaU7qsQ4fPnx'
});

moltin.Authenticate(function() {
  console.log("test");
});

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}
module.exports = Main;
