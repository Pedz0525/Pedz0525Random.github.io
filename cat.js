
let cat_image = document.getElementById("cat-output");
let cat_btn = document.getElementById("cat_btn");


cat_btn.addEventListener('click',catsimage);

function catsimage(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        cat_image.innerHTML = `<img src ="${data[0].url}"/>`;
    })
}
