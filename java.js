
window.onload = function(){
    const theme = localStorage.getItem("data-theme");
    if(theme === "dark")
        return document.body.setAttribute("data-theme", "dark");
    
    if(theme === "light")
    return document.body.setAttribute("data-theme", "light");
}

const input = document.querySelector(".theme-switcher input");



input.addEventListener("change", (e)=>{
    if(e.target.checked){
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    }else{
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    }
     
}) 
