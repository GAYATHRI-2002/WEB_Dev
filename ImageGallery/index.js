var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
//var openFullImg = document.getElementById("openFullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";

}

