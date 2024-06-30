import React from "react";
import ReactDOM from "react-dom";
import HelloWorld2 from "./routes/hello2";
import HelloWorld1 from "./routes/hello1";
ReactDOM.render(<HelloWorld1 />, document.getElementById("root1"));
ReactDOM.render(<HelloWorld2 />, document.getElementById("root2"));
