let index=0;
function carousel() {
    let slide=document.getElementsByClassName("slide");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display="none";
    }
    index++;
    if (index>slide.length) {
        index=1;
    }
     slide[index-1].style.display="block";
     setTimeout(carousel,8000)

}
carousel();

$(".cards").isotope({
    itemSelector:".card",
    layoutMode:"fitRows",
})
$(".filter-menu li").click(function() {
    $(".filter-menu li").removeClass("active");
    $(this).addClass("active");

    var selector=$(this).attr("data-filter")
    $(".cards").isotope({
    filter:selector
    })
})
// let a=document.querySelector("data-filter a");
// function textColor() {
//     a.innerText.style.color="red";
//     return true;
// }
// a.onclick=textColor;
document.querySelector(".filter-menu a").onclick = function(){
	document.querySelector(".filter-menu a").innerText.style.color = 'red';
}