const bodySelector = document.getElementById('body'); // does this work?
const fileSelect = document.getElementById("chess-image");
fileSelect.addEventListener("change", function (e) {
  displayFile(fileSelect.files[0]);
});

function displayFile(file) {
    const img = document.createElement("img");
    img.file = file;
    bodySelector.appendChild(img); 
    // read the file, see https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications 
    const reader = new FileReader();
    reader.onload = (function(aImg) { 
        return function(e) { 
            aImg.src = e.target.result; 
        }; 
    })(img);
    reader.readAsDataURL(file);
}