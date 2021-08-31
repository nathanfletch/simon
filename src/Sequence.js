export default function Sequence() {
  this.colors = [];
  this.playerInput = [];
  this.originalColors = ["yellow", "blue", "red"];
}

Sequence.prototype.getNext = function() {
  this.colors.push(this.originalColors[Math.ceil(Math.random() * 3) - 1]);
}

// Sequence.prototype.getNext = function() {
//   this.colors.push(this.originalColors[Math.ceil(Math.random() * 3)]);
// }

