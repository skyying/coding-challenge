import Tree from "./tree.js";
export const sketch = p => {
  let tree;
  p.registerEvent = () => {
    let button = document.querySelector(".input-area > button");
    button.addEventListener("click", p.drawTree);
  };
  p.setup = () => {
    p.drawTree();
  };
  p.drawTree = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background("#7f5bf8");
    p.registerEvent();
    tree = new Tree();
    let treeValue = document.querySelector(".input-area > input").value;
    treeValue = treeValue
      .split(" ")
      .join("")
      .split(",")
      .map(x => parseInt(x)).filter( x => x === x);
    if (!treeValue[0]) {
      alert("Please insert a valid string like below \n 3, 2, 5");
      return;
    }
    treeValue.forEach(val => {
      tree.addValue(val);
    });
    tree.traverse(p.drawNode);
  };
  p.drawNode = (c, parent) => {
    p.fill("#b4f9b6");
    p.stroke("#b4f9b6");
    p.line(parent.x + 1, parent.y + 1, c.x, c.y);
    p.noStroke();
    p.fill("#b4f9b6");
    p.ellipse(c.x, c.y, 30, 30);
    p.fill(0);
    p.textAlign(p.CENTER);
    p.textSize(14);
    p.text(c.value, c.x, c.y + 5);
  };
};
