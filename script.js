gsap.registerPlugin(ScrollTrigger);
const paras = document.querySelectorAll(".animate-first-para");
paras.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      // start: "top 80%", // Adjust as needed
      // end: "bottom 20%", // Adjust as needed
      toggleActions: "play pause play play", // Adjust as needed
    },
    y: 25,
    duration: 2,
    opacity: 0,
  });
});

// headings single

const headings = document.querySelectorAll(".animate-headings");
headings.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 80,
    duration: 2,
  });
});

// small paragraphs
const paras1 = document.querySelectorAll(".animate-para2");
paras1.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 30,
    duration: 2,
    opacity: 0,
  });
});

// buttons
const buttons = document.querySelectorAll(".animate-btn");
buttons.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause complete play",
    },
    y: 30,
    duration: 2,
    opacity: 0,
  });
});

const slow_btns = document.querySelectorAll(".animate-btn-slow");
slow_btns.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 60,
    duration: 1.3,
    opacity: 0,
  });
});

// big imag
const big_img = document.querySelectorAll(".animate-img");
big_img.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 0,
    duration: 2,
    opacity: 0,
  });
});

// 2 boxes
const boxe1 = document.querySelectorAll(".animate-box1-slow");
boxe1.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 50,
    duration: 1.5,
    opacity: 0,
  });
});

const boxe2 = document.querySelectorAll(".animate-box2-fast");
boxe2.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 70,
    duration: 0.9,
    opacity: 0,
  });
});

// 9 boxes

const col1 = document.querySelectorAll(".animate-row1-col1");
col1.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 40,
    duration: 0.9,
    opacity: 0,
  });
});

const col2 = document.querySelectorAll(".animate-row1-col2");
col2.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 70,
    duration: 1.2,
    opacity: 0,
  });
});

const col3 = document.querySelectorAll(".animate-row1-col3");
col3.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 100,
    duration: 1.5,
    opacity: 0,
  });
});

// 4 boxes
const box1 = document.querySelectorAll(".animate-row1");
box1.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 100,
    duration: 0.9,
    opacity: 0,
  });
});

const box2 = document.querySelectorAll(".animate-row2");
box2.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 50,
    duration: 1.5,
    opacity: 0,
  });
});

// social icons
const phone = document.querySelectorAll(".animate-phone");
phone.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 100,
    duration: 1,
    opacity: 0,
  });
});

const email = document.querySelectorAll(".animate-mail");
email.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 100,
    duration: 1.5,
    opacity: 0,
  });
});

// privacy policy
const privacy = document.querySelectorAll(".animate-privacy");
privacy.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 100,
    duration: 1,
    opacity: 0,
  });
});

const content = document.querySelectorAll(".animate-privacy-content");
content.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      toggleActions: "play pause play play",
    },
    y: 50,
    duration: 1.5,
    opacity: 0,
  });
});

// section-2
//  to 25
gsap.from("#inc_number1", {
  innerText: 0,
  duration: 2,
  snap: {
    innerText: 1,
  },
});
// to 950
gsap.from("#inc_number2", {
  innerText: 0,
  duration: 1,
  snap: {
    innerText: 1,
  },
});
// to 1.5
gsap.from(
  "#inc_number3",

  {
    innerText: 1,
    duration: 2,
    snap: {
      innerText: 0.1,
    },
  }
);
