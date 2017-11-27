const randomImg = () => {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    const imgName = "image_" + randomNumber + ".jpg";
    document.getElementById("imageId").src = "images/" + imgName;
}
const randomWord = () => {
    const wordArr = ["sod off", "go to hell", "choke on a dick", "bite me", "you're disgusting", "get bent", "get out of my face", "catch these hands"];
    const randomNumber = Math.floor(Math.random() * wordArr.length);
    document.getElementById("textId").innerHTML = wordArr[randomNumber];
    //change text of button
    document.getElementById("button").textContent = 'Click Again';
    
}