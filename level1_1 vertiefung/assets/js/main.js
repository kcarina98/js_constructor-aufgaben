class Ball {
  constructor(ballType) {
    this.setType(ballType);
  }

  setType(ballType) {
    if (ballType == null) {
      this.ballType = "regular";
    } else {
      this.ballType = ballType;
    }
  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);
