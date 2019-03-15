const MAX_FILE_SIZE = 500000; // Bytes
const ACCEPTABLE_HW_RATIO = {lowerBound: 0.98, upperBound: 1.02};
const bodySelector = document.getElementById('body'); // does this work?
const fileSelect = document.getElementById("chess-image");
fileSelect.addEventListener("change", function (e) {
  displayFile(fileSelect.files[0]);
});

function displayFile(file) {
    const img = document.createElement("img");
    img.file = file;
    
    // read the file, see https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications 
    const reader = new FileReader();
    reader.onload = (function(aImg) { 
    
        return function(e) { 
            
            if (aImg.file.size > MAX_FILE_SIZE || aImg.file.size == 0) {
                return;
            }

            // Not working. height and width aren't accessible until on DOM.
//             var hwRatio = parseInt(aImg.naturalHeight) / parseInt(aImg.naturalWidth);
//             if (hwRatio < ACCEPTABLE_HW_RATIO.lowerBound || hwRatio > ACCEPTABLE_HW_RATIO.upperBound ) {
//                 console.log("bad pic");
//                 return;
//             }
            aImg.src = e.target.result; 
            
        }; 
    })(img);
    reader.readAsDataURL(file);
    bodySelector.appendChild(img); 
}