const heading = React.createElement("h1", { id: "title"}, "Hello React");
const heading1 = React.createElement("h1", { id: "title1"}, "Hello React 1");
const container = React.createElement("div", { id: "container" }, [heading, heading1]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);