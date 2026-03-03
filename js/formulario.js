document.getElementById("imagen").addEventListener("change", function(event) {
    let file = event.target.files[0];
    let preview = document.getElementById("previewImg")
    if(file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
});
