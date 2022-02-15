/**
 * Create a Backpack object.
 */

const trackball = {
  color:  "grey",
  logo:  "logitec",
  ball: {
    color:  "blue",
    state: "dirty"
    },
    CleanBall: function () {
      this.ball.state = "clean";
  }
};

console.log("Ball state:  ", trackball.color)
console.log("Ball state,  ", trackball.ball.state)
console.log(trackball)