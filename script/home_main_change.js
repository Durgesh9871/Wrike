
let main_home_customer = [

    {
        img : "https://web-static.wrike.com/tp/storage/uploads/7dd214f0-63f6-471c-a0bf-d91af66ee81c/rebrand-quote-slider-image-syneos-health-2x.jpg" ,
        paragraph : "The moment our teams saw Wrike, we heard a resounding 'yes' – it was the one system that met each and every one of our team’s comprehensive and complex requirements." ,
        small_para : " Sherrie Besecker, Creative Technology Manager at Syneos Health" ,
        heading : "Watch Syneos Health's Story ->" ,
        image_2 : "https://web-static.wrike.com/tp/storage/uploads/f57e5493-aa0e-41c3-8130-f9ff3eb6059c/rebrand-quote-logo-syneos-health-white.svg" ,
     } ,

     {
        img : "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=496,dpr=1/tp/storage/uploads/8217f185-4a7a-4743-a531-15b6875d0c67/rebrand-quote-slider-image-walmart-canada-2x.jpg" ,
        paragraph :"Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work." ,
        small_para : "Francis Lalonde, Vice President of Transportation, Walmart Canada" ,
        heading : "Watch Walmart Canada's Story ->" ,
        image_2 : "https://web-static.wrike.com/tp/storage/uploads/d114cd4b-e55a-4f16-a017-4f64bde5d985/rebrand-quote-logo-walmart-canada-white.svg" ,
     } ,

     {
        img : "https://web-static.wrike.com/tp/storage/uploads/c23c6edf-8635-4b20-94a8-501cd9dba8e4/rebrand-quote-slider-image-texas-rangers-2x.jpg" ,
        paragraph :"I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that." ,
        small_para : "Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers" ,
        heading : "Watch Texas Rangers Story ->" ,
        image_2 : "https://web-static.wrike.com/tp/storage/uploads/d3457b3a-a4bd-4d95-8610-a40f13b10d6a/rebrand-quote-logo-texas-rangers.svg" ,
     } ,
     {
        img : "https://web-static.wrike.com/tp/storage/uploads/05bd499f-71f0-4210-9c96-b012946601e0/rebrand-quote-slider-image-monumental-2x.jpeg" ,
        paragraph :"We save time knowing what the clients need from us and then can track the progress of each request, which is something we couldn’t do previously." ,
        small_para : "Lori Meyers, Manager of Digital Assets, Monumental Sports & Entertainment" ,
        heading : "Read Monumental Sports & Entertainment Story's ->" ,
        image_2 :"https://web-static.wrike.com/tp/storage/uploads/81e846db-8bc6-4010-b1e1-868551a20a0c/rebrand-quote-slider-logo-monumental.svg" ,
     } ,
     {
        img : "https://web-static.wrike.com/tp/storage/uploads/a681d2d8-c113-4dbc-a3a0-c9344b8710c1/rebrand-quote-slider_image_siemens_2x.jpg" ,
        paragraph :"“Wrike helps us collaborate in the best possible way, and it gives our teams the support they need to work better.”" ,
        small_para : "Hannes Leitner, Process Owner, Project Execution, Siemens Smart Infrastructure" ,
        heading : "Read Siemen's Story ->" ,
        image_2 : "https://web-static.wrike.com/tp/storage/uploads/c2d73d2f-2a58-496e-88fd-974e78366584/rebrand-quote-logo-siemens-inverse.svg" ,
     } ,

]



// ALL BUTTON WORK 

let main_story_cus_img = document.getElementById("main_story_cus_img")
let b1 = document.getElementById("1")
let b2 = document.getElementById("2")
let b3 = document.getElementById("3")
let b4 = document.getElementById("4")
let b5 = document.getElementById("5")

//  customer review 

let main_story_cus = document.getElementById("main_story_cus")
let main_story_cus_name = document.getElementById("main_story_cus_name")
let company_name_img = document.getElementById("company_name_img")
let cus_heading = document.getElementById("cus_heading")



let button_1 =()=>{
//    console.log('1')
    
main_story_cus_img.src = "https://web-static.wrike.com/tp/storage/uploads/7dd214f0-63f6-471c-a0bf-d91af66ee81c/rebrand-quote-slider-image-syneos-health-2x.jpg"
b1.style.background = "#08cf65"

// colour none 
b2.style.background = ""
b3.style.background = ""
b4.style.background = ""
b5.style.background = ""

//   customer review 
main_story_cus.innerText = "The moment our teams saw Wrike, we heard a resounding 'yes' – it was the one system that met each and every one of our team’s comprehensive and complex requirements."

// cus NAME 

main_story_cus_name.innerText = "Sherrie Besecker, Creative Technology Manager at Syneos Health"
// IMAGES 
company_name_img.src = "https://web-static.wrike.com/tp/storage/uploads/f57e5493-aa0e-41c3-8130-f9ff3eb6059c/rebrand-quote-logo-syneos-health-white.svg"

cus_heading.innerText = "Watch Syneos Health's Story ->"

}

let button_2 =()=>{
    // console.log('2')
    main_story_cus_img.src = "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=496,dpr=1/tp/storage/uploads/8217f185-4a7a-4743-a531-15b6875d0c67/rebrand-quote-slider-image-walmart-canada-2x.jpg"
    b2.style.background = "#08cf65"

    // / colour none 
b1.style.background = ""
b3.style.background = ""
b4.style.background = ""
b5.style.background = ""

//   customer review 
 main_story_cus.innerText = "Everyone is in Wrike daily, we’ve built one story and one version of the truth. And that is a game changer for us. Now we do our project reviews in Wrike: no more need for presentations, word documents, or any of this additional work."
// / cus NAME 
main_story_cus_name.innerText =  "Francis Lalonde, Vice President of Transportation, Walmart Canada" 
// IMAGES 
company_name_img.src = "https://web-static.wrike.com/tp/storage/uploads/d114cd4b-e55a-4f16-a017-4f64bde5d985/rebrand-quote-logo-walmart-canada-white.svg"

cus_heading.innerText = "Watch Walmart Canada's Story ->"
}

let button_3 =()=>{
    // console.log('3')
    main_story_cus_img.src = "https://web-static.wrike.com/tp/storage/uploads/c23c6edf-8635-4b20-94a8-501cd9dba8e4/rebrand-quote-slider-image-texas-rangers-2x.jpg"
    b3.style.background = "#08cf65"
    // /color none
    b1.style.background = ""
    b2.style.background = ""
    b4.style.background = ""
    b5.style.background = ""

    //   customer review 
 main_story_cus.innerText = "I'm thankful for Wrike. It's a fast-paced world, and we're all trying to keep up. Wrike helps me do just that."
 // / cus NAME 
 main_story_cus_name.innerText = "Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers"
 // IMAGES 
 company_name_img.src =  "https://web-static.wrike.com/tp/storage/uploads/d3457b3a-a4bd-4d95-8610-a40f13b10d6a/rebrand-quote-logo-texas-rangers.svg"

 cus_heading.innerText = "Watch Texas Rangers Story ->"

}

let button_4 =()=>{
    // console.log('4')
    main_story_cus_img.src = "https://web-static.wrike.com/tp/storage/uploads/05bd499f-71f0-4210-9c96-b012946601e0/rebrand-quote-slider-image-monumental-2x.jpeg"
    b4.style.background = "#08cf65"

    //  // /color none
    b1.style.background = ""
    b2.style.background = ""
    b3.style.background = ""
    b5.style.background = ""

    //   customer review 
 main_story_cus.innerText = "We save time knowing what the clients need from us and then can track the progress of each request, which is something we couldn’t do previously."
 // / cus NAME 
 main_story_cus_name.innerText = "Lori Meyers, Manager of Digital Assets, Monumental Sports & Entertainment" 
 // IMAGES 
 company_name_img.src = "https://web-static.wrike.com/tp/storage/uploads/81e846db-8bc6-4010-b1e1-868551a20a0c/rebrand-quote-slider-logo-monumental.svg"

 cus_heading.innerText = "Read Monumental Sports & Entertainment Story's ->"
}

let button_5 =()=>{
    // console.log('5')
    main_story_cus_img.src = "https://web-static.wrike.com/tp/storage/uploads/a681d2d8-c113-4dbc-a3a0-c9344b8710c1/rebrand-quote-slider_image_siemens_2x.jpg"
    b5.style.background = "#08cf65"
    // color none 
    b1.style.background = ""
    b2.style.background = ""
    b3.style.background = ""
    b4.style.background = ""

    //   customer review 
 main_story_cus.innerText = "“Wrike helps us collaborate in the best possible way, and it gives our teams the support they need to work better.”"
 // / cus NAME 
 main_story_cus_name.innerText = "Hannes Leitner, Process Owner, Project Execution, Siemens Smart Infrastructure"
 // IMAGES 
 company_name_img.src = "https://web-static.wrike.com/tp/storage/uploads/c2d73d2f-2a58-496e-88fd-974e78366584/rebrand-quote-logo-siemens-inverse.svg"

 cus_heading.innerText = "Read Siemen's Story ->"


}