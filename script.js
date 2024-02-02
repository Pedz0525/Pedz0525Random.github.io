let dogImage = document.getElementById("dog-output");
let dog_btn = document.getElementById("btn-dog");


dog_btn.addEventListener('click',randomImgae);

function randomImgae(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dogImage.innerHTML = `<img src ="${data.message}"/>`;
    })
}

