function enableScrolling() {
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
  }, 3300);
}

const heroContainer = document.querySelector(".scene");

function displayHero() {
  const heroImages = ["hero1", "hero2", "hero3", "hero4"];
  let randomN = Math.floor(Math.floor(Math.random() * heroImages.length));

  heroContainer.innerHTML = `<img src="images/${heroImages[randomN]}.gif" alt="hero">`;
}

// window.onload = enableScrolling();
window.onload = displayHero();

const burgerBtn = document.querySelector(".burgerContainer");
const about = document.getElementById("about-menu");
const contact = document.getElementById("contact-menu");
const project = document.getElementById("project-menu");

burgerBtn.addEventListener("click", () => toggleMenu());
about.addEventListener("click", () => {
  toggleMenu(), openBurger();
});
contact.addEventListener("click", () => {
  toggleMenu(), openBurger();
});
project.addEventListener("click", () => {
  toggleMenu(), openBurger();
});

const toggleMenu = () => {
  heroContainer.classList.toggle("hide-hero");
  heroContainer.classList.toggle("menu");
onWindowResize()
  about.classList.toggle("hide-menu");
  contact.classList.toggle("hide-menu");
  project.classList.toggle("hide-menu");
};



// 3d -----------------------------------------------------------------

// // 3D SCENE

// let container;
// let camera;
// let renderer;
// let scene;
// let object;

// function init() {
//   container = document.querySelector(".scene");

//   //Create scene
//   scene = new THREE.Scene();

//   const fov = 55;
//   const aspect = container.clientWidth / container.clientHeight;
//   const near = 0.1;
//   const far = 500;

//   //Camera setup
//   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(1, 100, 600);

//   //Light
//   const ambient = new THREE.AmbientLight(0x404040, 3);
//   scene.add(ambient);

//   const light = new THREE.DirectionalLight(0xffffff, 0.33);
//   light.position.set(0, 0, 20);
//   scene.add(light);

//   //Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(container.clientWidth, container.clientHeight);

//   renderer.setPixelRatio(window.devicePixelRatio);

//   container.appendChild(renderer.domElement);

//   //Load model
//   let loader = new THREE.GLTFLoader();
//   // loader.load("3d/Juice/scene.gltf", function(gltf){

//   loader.load(
//     "./3d_planet/scene.gltf",
//     function (gltf) {
//       scene.add(gltf.scene);

//       object = gltf.scene.children[0];
//       animate();
//       object.position.z = 200;
//        object.rotation.y = 0.2;
//       // object.rotation.z = "-0.3";
//     }
//   );
// }
// function animate() {
//   requestAnimationFrame(animate);
//     object.rotation.z += 0.005;

//   renderer.render(scene, camera);
// }

// init();

// function onWindowResize() {
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(container.clientWidth, container.clientHeight);
// }

// window.addEventListener("resize", onWindowResize);