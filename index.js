const card = document.querySelector(".pfp");
const container = document.querySelector(".profile-card");

//add event listener for mouse movement that rotate the picture based one mouse movement.
container.addEventListener("mousemove", (e) => {
  //Take the windows inner width and the mouse movement change and divide it by 25.
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;
  //Change the rotation based on the degree of the new coordinates.
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
