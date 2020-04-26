/* Overlay Menu Opening and CLosing */
const checkbox = document.querySelector("#hamburger input[type='checkbox']");
const nav = document.querySelector("#nav ul");

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
//Opening
const projects = document.querySelector("#projects");
projects.onclick = function(e){

    let href = e.target.href;

    if(href){
        if(href.includes("popup")){
            let start = href.search("#");
            let popupId = href.substring(start)
            let popup = document.querySelector(popupId);
            popup.classList.add("show");
        }
    }
    if(e.target.classList.contains("close"))
    {
        let openedPopup = e.target.parentElement.parentElement;
        openedPopup.classList.remove("show");
    }
}
//Closing 



// Junk Code
// Showing Menu and Hiding it
// const ham = document.querySelector("#hamburger");
// const close = document.querySelector("#close-btn");
// const overlay = document.querySelector("#overlay");


// ham.addEventListener("click", function(e){
//     e.preventDefault();
//     if(!overlay.classList.contains("show"))
//         overlay.classList.add("show");
//     else
//         overlay.classList.remove("show");
// });


// //When a link is clicked closes Nav for link being on same page.
// const nav = document.querySelector("#nav ul");

// nav.addEventListener("click", e =>{
//     if(e.target.tagName==="A")
//         overlay.classList.add("width-0");
// })
