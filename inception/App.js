const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from ReactJs!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(root); // this is an object
