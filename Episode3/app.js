// const JsxHeading = <h1>Namaste React using React🚀</h1>;
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";

// const parent = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "This is H1"),
//   React.createElement("h2", {}, "This is H2"),
//   React.createElement("h3", {}, "This is H3"),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// Using JSX

// const jsxCode = (
//   <div className="title">
//     <h1>This is H1</h1>
//     <h2>This is H2</h2>
//     <h3>This is H3</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxCode);

// Component Composition

// const SmallestHeading = () => <h5>This is the Smallest Heading</h5>;

// const TitleComponent = () => {
//   return (
//     <div className="title">
//       <h1>This is the Largest Heading</h1>
//       <SmallestHeading />
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TitleComponent />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
