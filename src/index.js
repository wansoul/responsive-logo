import lottie from "lottie-web";
import "./styles.css";

import animData from "./data.json";

let isHorizontal = true;
let breakpoint = 450;

const anim = lottie.loadAnimation({
  container: document.getElementById("animContainer"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: animData
});

function invertAndPlay(direction) {
  anim.setDirection(direction);
  anim.play();
  isHorizontal = !isHorizontal;
}

function check(width) {
  if (width <= breakpoint && isHorizontal) {
    invertAndPlay(1);
  } else if (width > breakpoint && !isHorizontal) {
    invertAndPlay(-1);
  }
}

document.body.onload = () => {
  check(window.innerWidth);
};

window.addEventListener("resize", e => {
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout(function() {
    check(e.target.innerWidth);
  }, 250);
});
