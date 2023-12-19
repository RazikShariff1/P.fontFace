// gsap.to(".hero h1",{
//     x:50,
//     // duration:1,
//         // duration:0.2,
//         ease:"Power1.easeInOut"
//     // delay:1,
//     // duration:1
// })
// Import GSAP library if not already done
// Import GSAP library if not already done

// Example target text element (replace with your own)
// rt GSAP library and ScrollTrigger if not already done
gsap.registerPlugin(ScrollTrigger);

// Example target text element (replace with your own)
const textElement = document.querySelector('#template1 h1');

// Set initial state (hide text)
gsap.set(textElement, { opacity: 0, y: 20 });

// Create a simple reveal animation with ScrollTrigger
gsap.to(textElement, {
  opacity: 1,
  y: 0,
  delay:2,
  stagger: 0.2, // Adjust the stagger value as needed
  ease: Power1.easeInOut,
  scrollTrigger: {
    trigger: textElement,
    start: 'top 30%', // Adjust the start position based on your needs
    end: '+=100',
    duration: 200,
    scrub: 2,
  },
});
// Import GSAP library and ScrollTrigger if not already done
// gsap.registerPlugin(ScrollTrigger);

// // Example target text element (replace with your own)
// const textElement = document.querySelector('#template1 h1');

// // Set initial state (hide text)
// gsap.set(textElement, { opacity: 0, y: 20 });

// // Create a smooth reveal animation with ScrollTrigger
// gsap.to(textElement, {
//   opacity: 1,
//   y: 0,
//   duration: 1,
//   stagger: 0.1, // Adjust the stagger value as needed
//   ease: Power2.easeInOut,
//   scrollTrigger: {
//     trigger: textElement,
//     start: 'top 80%', // Adjust the start position based on your needs
//     end: '+=100',
//     scrub: true,
//   },
// });
