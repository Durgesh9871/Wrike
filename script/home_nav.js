
// RESPONSIVE MENU BUTTON

let main_menu = document.getElementById("menu_all_detail")
let responsive_menu_cutter = document.getElementById("responsive_menu_cutter")
let responsive_menu_button = document.getElementById("responsive_menu_button")
let main_home = document.getElementById("main_home")

let main_menu_button = ()=>{
        

    if(main_menu.style.display == "block"){
        main_menu.style.display="none"
        main_home.style.display = "block"
        responsive_menu_button.setAttribute("class","fas fa-bars")
        console.log("No")
    }
    else{
        main_menu.style.display="block"
        main_home.style.display = "none"
        responsive_menu_button.setAttribute("class","fa-solid fa-xmark")
        console.log('yes')
    }
        

}
 



