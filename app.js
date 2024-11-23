const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello my name is alan"),
    React.createElement("h2", {}, "helloooooo"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heloooooooooooooooo World"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
