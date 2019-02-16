import Tree from "./tree.js";
export const sketch = p => {
  let tree;
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background("#7f5bf8");
    tree = new Tree();
    [5, 1, 9, 2, 3, 1, 0, 4, 0, 3].forEach(val => {
      tree.addValue(val);
    });
    tree.traverse(p.drawNode);
  };
  p.draw = () => {};
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
