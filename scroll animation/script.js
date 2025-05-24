gsap.from(".b1", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotate: 360,
});

gsap.from(".b2", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotate: 360,
  scrollTrigger: {
    trigger: ".b2",
    markers: true,
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".b3", {
  opacity: 0,
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotate: 360,
  scrollTrigger: {
    trigger: ".b3",
    markers: true,
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});
