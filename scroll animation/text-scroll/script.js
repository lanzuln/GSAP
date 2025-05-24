gsap.to(".sec_2 h1", {
  duration: 2,
  delay: 0.5,
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: ".sec_2",
    markers: true,
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin:true
  },
});
