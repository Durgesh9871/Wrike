function changeImage(){
    let img =document.getElementById("image")
    img.src="images/1st.jpg"
}

function changeImage2(){
    let img =document.getElementById("image")
    img.src="images/5th.jpg"
}

function changeImage3(){
    let img =document.getElementById("image")
    img.src="images/4th.jpg"
}

function changeImage4(){
    let img =document.getElementById("image")
    img.src="images/5th.jpg"
}
function changeImage5(){
    let img =document.getElementById("image")
    img.src="images/6th.jpg"
}
function changeImage6(){
    let img =document.getElementById("image")
    img.src="images/7th.jpg"
}

let jump_to_top_btn = document.getElementById("jump_to_top_btn");


function jump_to_top() {
    document.documentElement.scrollTop = 0;
    // behavior:"smooth"
  }

// window.jump_to_top_btn({
//     top:0,
//     behaviour:"smooth"
// })