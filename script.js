console.log("working");
const tl = gsap.timeline();

tl.from(".nav h1, .nav div ul a, nav div button", {
  opacity: 0,
  y: -30,
  stagger: 0.2,
});

tl.from(
  ".main .left h1, p,button",
  {
    opacity: 0,
    y: 30,
    stagger: 0.2,
  },
  "section1"
);
tl.from(
  ".main .right img",
  {
    opacity: 0,
    x: 30,
  },
  "section1"
);

gsap.from(
  ".section2 .left img ",
  {
    x: -100,
    scrollTrigger: {
      trigger: ".section2",
      start: "top top",

      scrub: 1,
      // markers: true,
    },
  },
  "section2"
);
gsap.from(
  ".section2 .right  ",
  {
    x: 100,
    scrollTrigger: {
      trigger: ".section2",
      start: "top top",

      scrub: 1,
      pin: true,
    },
  },
  "section2"
);
gsap.from(".section3 .div1, .div2", {
  opacity: 0,
  x: 200,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".section3",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});
gsap.from(
  ".footer1 , .footer-logo  ",

  {
    opacity: 0,
    x: 200,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "footer",
      scrub: 2,
      pin: true,
      // markers: true,
    },
  }
);
