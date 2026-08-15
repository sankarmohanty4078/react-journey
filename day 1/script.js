const element = React.createElement("h2", { id: "heading" }, "HI from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
//We're basically telling React by the above that: "Here is the part of my DOM that I want you to manage."
//And that is one of the clearest ways to feel the difference between a library and a framework.
console.log(element);
root.render(element);

{
  /* <div id="parent">
        <div id="child1"></div>
        <div id="child2">
            <h1></h1>
            <h2></h2>
        </div>
</div> */
}

const element2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, "Hi this is child1"),
  React.createElement("div", { id: "child2" }, [
    "Hi this is child2",
    React.createElement("h1", {}, "Hi this is h1 of child2"),
    React.createElement("h2", {}, "Hi this is h2 of child2"),
  ]),
]);

root.render(element2);
//after this statement all the existing content of root will be replaced by this one's html output

// A library is something you can bring into your existing application and use where you need it.
// Compare that with a framework-+
// A framework generally establishes a much stronger structure for your application.
// It tends to say something closer to:
// "Here is how your application should be structured, where routing goes, how pages are organized,
//  how data flows through the application, etc.I'll provide the overall application architecture."
// React doesn't force that entire architecture on you.
// React's core job is essentially:Build and update UI.
