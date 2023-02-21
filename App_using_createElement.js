import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "title", key: "k1"}, "Hello React");
const heading1 = React.createElement("h1", { id: "title1", key: "k2"}, "Hello React 1");
const container = React.createElement("div", { id: "container", key: "k3" }, [heading, heading1]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

obj1 = {
    name: "A",
    printName1: () => {
        console.log(this);
    },
    printname2: function () {
        console.log(this);
    }
};

obj2 = {
    name: "B"
};

obj1.printName1();
obj1.printname2();
obj1.printName1.call();
obj1.printname2.call();