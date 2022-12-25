const pic = document.querySelector(".pfp");
const card = document.querySelector(".profile-pic");
//Make sure the picture is there ot animate it
if(pic != null) {
  //Ad event listener for mouse movement that rotate the picture based one mouse movement.
  pic.addEventListener("mousemove", (e) => {
    //Take the windows inner width and the mouse movement change and divide it by 25.
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    //Change the rotation based on the degree of the new coordinates.
    pic.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  //Listen for when the mouse enters the profile container
  card.addEventListener("mouseenter", (e) => {
    //Dont change the transition of the picture when entering.
    pic.style.transition = "none";
  });

  //Listen for when the mouse leaves the profile container and
  container.addEventListener("mouseleave", (e) => {
    //Easily transition and transform the card to default.
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
}
