var header = document.querySelector("#header")

a = document.querySelectorAll(".a")

image = document.querySelector("#img")

boxToTop = document.querySelector(".box-to-top")

window.onscroll = function(){

    if(window.pageYOffset > 1){
       
        header.className = "blon"
  
        for (let i = 0 ; i < a.length; i++){
            a[i].classList.add("black")
        }
        
        img.src= "images/logo.webp"
       

    }else  {
        header.className = ""
                
        for (let i = 0 ; i < a.length; i++){
            a[i].classList.remove("black")
        }
        
        img.src= "images/logo-alt.webp"

 

    }

    while (window.pageYOffset > 1000){
        boxToTop.classList.add("top")
        i++
    }
    while (window.pageYOffset < 1000){
        boxToTop.classList.remove("top")
        i++
    }

}

// respansef func

menu = document.querySelector( ".fa-bars")

ul = document.querySelector("ul")

nav = document.querySelector("nav")

portCont = document.querySelector(".port-cont")

clear = portCont.children[3]

cup = document.querySelector(".cup-client")

console.log(cup.clientHeight)


menu.onclick = function () {
    ul.classList.toggle("block")
    nav.style.height = "0px"

}

window.onresize = function() {
    console.log(document.body.clientWidth)

    if (document.body.clientWidth >= 2018 ) {
        ul.classList.remove("block")
     }
    
}

console.log("oumourek weth7a")
  
