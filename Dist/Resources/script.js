/* Overlay Menu Opening and CLosing */
const checkbox = document.querySelector("#hamburger input[type='checkbox']");
const nav = document.querySelector("#nav ul");
const navbar = document.querySelector("#navbar");

checkbox.addEventListener("change", function(){
    if(checkbox.checked)
        overlay.classList.add("width-100");
    else
    overlay.classList.remove("width-100");
})

nav.addEventListener("click", e =>{
    if(e.target.tagName==="A")
    {
        checkbox.checked = false;
        overlay.classList.remove("width-100");
    }
});

// Popup opening and Closing
const projects = document.querySelector("#projects");
projects.onclick = function(e){

    let href = e.target.href;
    //Opening
    if(href){
        if(href.includes("popup")){
            let start = href.search("#");
            let popupId = href.substring(start)
            let popup = document.querySelector(popupId);
            popup.classList.add("show");
        }
    }
    //Closing
    if(e.target.classList.contains("close"))
    {
        let openedPopup = e.target.parentElement.parentElement;
        openedPopup.classList.remove("show");
    }
} 



window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
  }