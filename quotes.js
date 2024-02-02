

let quotes = document.getElementById("quote");
let btn_quotes = document.getElementById("quotes_btn");


btn_quotes.addEventListener('click',randomquotes);

function randomquotes(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        quotes.innerHTML = `<p>${data.content}</p>
        <p>- ${data.author}</p>
        <p>Category: ${data.tags.join(', ')}</p>`;
    })
}

