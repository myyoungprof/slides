const slides = document.querySelectorAll(".slides")
const next = document.querySelector(".nextbtn")
const prev = document.querySelector(".prebtn")

slides.forEach(function(slide, index){
    slide.style.left = `${index*100}%`
})

let counter = 0;

next.addEventListener("click", function(){
    counter++;
    actionTime ()
})

prev.addEventListener("click", function(){
    counter--;
    actionTime ()
})

function actionTime (){
    if(counter < slides.length -1){
        next.style.visibility = "visible"
    }

    else(
        next.style.visibility= "hidden"
    )

    if(counter > 0){
        prev.style.visibility ="visible"
    }

    else{
        prev.style.visibility ="hidden"
    }
    slides.forEach(function(slide){
        slide.style.transform = `translatex(-${counter*100}%)`
    })
}