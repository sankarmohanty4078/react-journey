import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement("h2", { id: "heading" }, "HI from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
//We're basically telling React by the above that: "Here is the part of my DOM that I want you to manage."
//And that is one of the clearest ways to feel the difference between a library and a framework.
console.log(element);
root.render(element);

{
  //Task is to display this:
  /* <div id="parent">
        <div id="child1"></div>
        <div id="child2">
            <h1></h1>
            <h2></h2>
        </div>
</div> */
}

/*Old way:
const element2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, "Hi this is child1"),
  React.createElement("div", { id: "child2" }, [
    "Hi this is child2",
    React.createElement("h1", {}, "Hi this is h1 of child2"),
    React.createElement("h2", {}, "Hi this is h2 of child2"),
  ]),
]);
*/

const Component1 = () => <h1>Hi i am Component 1</h1>;
const react_element = (
  <>
    <h1> Hi i am a react element and i have a react component inside me</h1>
    <Component1 />
  </>
);

const Component2 = () => {
  return (
    <div id="parent">
      Hi i am parent and a react component and i have a react element inside me
      {react_element}
      {/*regular js inside jsx*/}
      <div id="child1">Hi i am child1</div>
      <div id="child2">
        <h1>Hi i am h1 of child2</h1>
        <h2>Hi i am h2 of child2</h2>
      </div>
    </div>
  );
};
root.render(<Component2 />);
