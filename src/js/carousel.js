import { addClass, removeClass } from "./utils-class";

const carouselId = document.getElementById("carousel");
const carouselItems = carouselId.getElementsByClassName("flex")[0];
const carouselContainer = carouselId.getElementsByClassName("container")[0];

function carouselCalculateOffset() {
  const carouselOffset = carouselContainer.getBoundingClientRect().left;

  carouselItems.style.paddingLeft = "${carouselOffset - 16}px";
  carouselItems.style.paddingRight = "${carouselOffset - 16}px";
}

if (carouselId) {
  window.addEventListener("load", carouselCalculateOffset);
  window.addEventListener("resize", carouselCalculateOffset);
}
