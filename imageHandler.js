//var x = document.getElementById("chess-image"); .files[0];
//console.log(x);
const bodySelector = document.getElement('body'); // does this work?
const fileSelect = document.getElementById('chess-image');
fileSelect.addEventListener("change", function (e) {
  displayFile(fileSelect.files[0]);
});





function displayFile(file) {
    if (!file.type.startsWith('image/')){ continue }

    const img = document.createElement("img");
    //img.classList.add("obj");
    img.file = file;
    bodySelector.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
}