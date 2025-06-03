let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");
let img = document.querySelector(".img");

main.addEventListener("mousemove", function (value) {
  gsap.to(cursor, {
    duration: .5,
    x: value.x,
    y: value.y,
  });
});

img.addEventListener("mouseenter", function (value) {
    cursor.innerHTML = "View Image";
  gsap.to(cursor, {
    scale: 4,
  });
});

img.addEventListener("mouseleave", function (value) {
     cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
