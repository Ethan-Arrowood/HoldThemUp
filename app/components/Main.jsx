var React = require("react");
var Moltin = require("Moltin");

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx rendered</p>
          <Moltin/>
          {props.children}
        </div>
      </div>
    </div>
  )
}
module.exports = Main;
