const flames = document.querySelectorAll(".flame");
const smokeText = document.querySelector(".smoke-text");
const boy = document.querySelector(".boy");
const girl = document.querySelector(".girl");
const boyHearts = boy.querySelector(".hearts");
const girlHearts = girl.querySelector(".hearts");

flames.forEach((flame) => {
  flame.addEventListener("click", () => {
    flame.style.animation = "none";
    flame.style.opacity = "0";

    // Show smoke
    const smoke = flame.parentElement.querySelector(".smoke");
    smoke.style.opacity = "1";

    // Show the text after smoke animation
    setTimeout(() => {
      smokeText.style.opacity = "1";
    }, 1000);

    // Move the rose to the girl
    setTimeout(() => {
      const rose = boy.querySelector(".rose");
      rose.style.opacity = "0"; 
      girl.appendChild(rose); 
      setTimeout(() => {
        rose.style.opacity = "1"; 
      }, 100); 
    }, 2000);

    // Start hearts animation for both boy and girl
    setTimeout(() => {
      boyHearts.style.opacity = "1";
      girlHearts.style.opacity = "1";
    }, 3000);

    // Boy smiles
    setTimeout(() => {
      boy.classList.add("smile");
    }, 3000);

    // Boy and girl move closer
    setTimeout(() => {
      boy.style.left = "40%";
      girl.style.right = "40%";
    }, 3000);
  });
});