gsap.to(".scroll_main_wrapper", {
  x: "-200vw",
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll_main_wrapper",
    start: "top top",
    end: "+=2000", // বা যত স্ক্রল লাগে তিনটা section দেখতে
    scrub: true,
    pin: true,
    markers: true,
  },
});
