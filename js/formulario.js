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


document.getElementById("productoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    let precio = document.getElementById("precio").value.trim();
    let categoria = document.getElementById("categoria").value;
    let ImagenInput = document.getElementById("imagen");
    let imagen = document.getElementById("previewImg").src;

    if (ImagenInput.files.length ===0) {
        alert ("Por favor, seleciona una imagen.")
        return;
    }
    if (!nombre || !precio || !categoria) {
        alert ("por favor, completa todos los campos");
        return;
    }

    let productos = JSON.parse (localStorage.getItem("productos")) || [];
    productos.push({nombre,precio,categoria,imagen});

    localStorage.setItem("productos", JSON.stringify(productos));

    alert("Producto guardado en LocalStorage 👌");

    location.reload()
});