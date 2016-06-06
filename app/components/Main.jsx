var React = require("react");

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <p>Main.jsx rendered</p>
                    <button type="button" className="btn btn-primary">Test</button>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
module.exports = Main;
