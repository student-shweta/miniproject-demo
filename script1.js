function openTab(tabName) {

    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }


    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }


    document.getElementById(tabName).style.display = "block";


    event.currentTarget.classList.add("active");
}
//openTab(event,'tab1');

const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle("active");
        console.log("button was clicked");

    })
})


var indexValue=1;
showImg(indexValue);
function btm_slide(e){
    showImg(indexValue = e);
}
function side_slide(e){
    showImg(indexValue += e);
}
function showImg(e){
    var i;
    const img =document.querySelectorAll("img");
    const sliders =document.querySelectorAll(".btm_sliders span");
    if(e > img.length){
        indexValue = 1;
    }
    if(e < 1){
        indexValue=img.length;
    } 
    for(i=0; i<img.length;i++){
        img[i].style.display="none";
    }
    for(i=0; i<sliders.length;i++){
        sliders[i].style.background="white";
    }
    img[indexValue-1].style.display="block";
    sliders[indexValue-1].style.background="black";



}  




