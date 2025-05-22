// ================= step by step animation 
// gsap.to("#box img", {
//   x: 200,
//   duration: 1,
//   delay:.5,
//   repeat:-1,
//   yoyo: true,
// });


// gsap.to("#box2 img", {
//   x: 200,
//   duration: 1,
//   delay:1.5,
//    repeat:-1,
//   yoyo: true,
// });


// gsap.to("#box3 img", {
//   x: 200,
//   duration: 1,
//   delay:2.5,
//    repeat:-1,
//   yoyo: true,
// });



// =============== animation by timeline 

let go = gsap.timeline();
// go.to("#box img", {
//        x: 200,
//   duration: 1,
//   delay:1.5,
//   repeat:-1,
//   yoyo: true,
// })

// go.to("#box2 img", {
//        x: 200,
//   duration: 1,
//   delay:1.5,
//   repeat:-1,
//   yoyo: true,
// })

// go.to("#box3 img", {
//        x: 200,
//   duration: 1,
//   delay:1.5,
//   repeat:-1,
//   yoyo: true,
// })

go.from(".logo h1", {
    y: -20,
    duration: .5,
    delay: .5,
    opacity: 0,
})

go.from(".nav li", {
    y: -20,
    duration: .5,
    delay: .5,
    opacity: 0,
    stagger: .1,
})
go.from(".main-text", {
    y: 20,
    duration: .5,
    delay: .5,
    opacity: 0,
})