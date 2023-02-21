import React from "react";
import ReactDOM from "react-dom/client";

// React element (can't return)
const heading = <h1 id= "title" key= "k1">Hello React</h1>;
const heading1 = <h1 id= "title1" key= "k2">Hello React 1</h1>;


// React component - 1. functional component (new way), 2. class based component (old way)
const Heading2 = () => <h1 id= "title2" key= "k3">React component</h1>;
const Heading3 = () => <h1 id= "title3" key= "k4">React component via func call</h1>;
const Heading4 = function () {
    return (
        <h2 id="title4" key= "k5">React component - normal func</h2>
    )
};

let check = 'anything will render';

const Container = () =>(
    <div id= "container" key= "k3">
        {check}
        {7+4}
        {heading}
        {heading1}
        <Heading2/>
        {Heading3()}
        {<Heading4/>}
        or
        {Heading4()}
        {
            //comment within JSX
        }
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);