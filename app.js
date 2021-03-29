

function displayHero(){

    const heroImages = ["hero1","hero2","hero3","hero4"];
    const heroContainer = document.querySelector(".hero");
    let randomN = Math.floor(Math.floor(Math.random() * heroImages.length));

    heroContainer.innerHTML = `<img src="images/${heroImages[randomN]}.gif" alt="hero">`;

};
window.onload = displayHero();


