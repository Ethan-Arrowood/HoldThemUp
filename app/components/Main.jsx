var React = require("react");
var moltin = require("moltin")({
  publicId: 'QNhaJi0rbUMcliDZXxOFrgWQBtBewZLhirmNi7PnHg'
});

moltin.Authenticate(function() {
  var product = moltin.product.find({slug: 'testproduct1'});
  console.log(product);
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
