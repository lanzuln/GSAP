let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");
let img = document.querySelector(".img");

main.addEventListener("mousemove", function (value) {
  gsap.to(cursor, {
    duration: 0.5,
    x: value.x,
    y: value.y,
  });
});

img.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View Image";
  let color = cursor.dataset.cursorEnterColor;
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: color,
  });
});

img.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  let colorLeave = cursor.dataset.cursorLeaveColor;
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: colorLeave,
  });
});
