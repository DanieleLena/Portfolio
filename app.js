

function enableScrolling() {    
    setTimeout(()=>{
        document.body.style.overflowY = "scroll";
    },3300);
}

function displayHero(){

    const heroImages = ["hero1","hero2","hero3","hero4"];
    const heroContainer = document.querySelector(".hero");
    let randomN = Math.floor(Math.floor(Math.random() * heroImages.length));

    heroContainer.innerHTML = `<img src="images/${heroImages[randomN]}.gif" alt="hero">`;

};

// window.onload = enableScrolling();
window.onload = displayHero();


// Project video 

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {

    video.addEventListener("mouseover", ()=> {
        
        video.play();
        
    })
    video.addEventListener("mouseout", () => {
   video.currentTime = 0;
   video.pause();
    });
})


