const heading = React.createElement("h1", {id: "h1"}, "I'm an h1 tag");
const heading2 = React.createElement("h2", {id: "h2"}, "I'm a h2 tag");
const heading3 = React.createElement("h3", {id: "h3"}, "I'm a h3 tag");
const heading4 = React.createElement("h4", {id: "h4"}, "I'm a h4 tag");

const child1 = React.createElement("div", {id: "child1"}, [heading, heading2]);
const child2 = React.createElement("div", {id: "child2"}, [heading3, heading4]);

const parent = React.createElement("div", {id:"parent"}, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);