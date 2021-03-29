const btn = document.querySelector(".burgerContainer");

// ANIMATION FOR THE BTN ================================
const go1Second = document.getElementById("go1Second");
const go2Second = document.getElementById("go2Second");
const go3Second = document.getElementById("go3Second");

const go1Triangle = document.getElementById("go1Triangle");
const go2Triangle = document.getElementById("go2Triangle");

const back1Triangle = document.getElementById("back1Triangle");
const back2Triangle = document.getElementById("back2Triangle");

const back1Second = document.getElementById("back1Second");
const back2Second = document.getElementById("back2Second");
const back3Second = document.getElementById("back3Second");

let isOpenBtn = true;


btn.addEventListener("click", function(){
  
    if(isOpenBtn){
        go1Second.beginElement();
        go2Second.beginElement();
        go3Second.beginElement();
          
          
          setTimeout(function(){ 
             go1Triangle.beginElement();
              go2Triangle.beginElement();
               }, 500);
      
       
          
          isOpenBtn = false;
        } else {
          
          back1Triangle.beginElement();
          back2Triangle.beginElement();
          
         setTimeout(function(){ 
      back1Second.beginElement();
      back2Second.beginElement();
      back3Second.beginElement();
           
           },300);
          
          isOpenBtn = true;
        }
      });

      // END ANIMATION FOR THE BTN ================================

      const menu = document.querySelector(".menu");
      const columnOne = document.querySelector(".column-one");
      const columnTwo = document.querySelector(".column-two");
      const columnThree = document.querySelector(".column-three");
      
      const thirdContent = document.querySelector(".thirdContent");
      
      let isOpen = true;
      let isFirstOpen = true;
      
      btn.addEventListener("click", ()=> {
      if(isOpen && isFirstOpen === false) {
       menuAnimateBack(); 
      } else if (isFirstOpen){
      menu.classList.remove("beginningStateMenu");
        isFirstOpen = false;
      }
        else {
        menuAnimate();
      }
        
      });
      
      function menuAnimateBack() {
        
        isOpen = false;
      
        columnThree.classList.add("animation-column-three");
        
        setTimeout(()=> {
      columnTwo.classList.add("animation-column-two");
      }, 1200);
        
        setTimeout(()=> {
             thirdContent.classList.add("hide-third-column");
      
        }, 800);
          
        setTimeout(function(){ 
      menu.classList.add("hideMenu")
      }, 2000);
        
      }
      
      function menuAnimate() {
        
        isOpen = true;
        
        menu.classList.remove("hideMenu");
        columnThree.classList.remove("animation-column-three");
       columnTwo.classList.remove("animation-column-two");
       thirdContent.classList.remove("hide-third-column");
        
      }