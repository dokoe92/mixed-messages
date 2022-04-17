

let quotes = [
    "Elvis Presley: 'Rock and roll music, if you like it, if you feel it, you cant help but move to it. Thats what happens to me. I cant help it'",
    "Jimi Hendrix: 'Music is my religion.'",
    "Bob Dylan: 'Play it fuckin' loud!'",
    "Freddie Mercury: 'I wont be a rock star. I will be legend.'"
];


let button = document.querySelector(".quote-button");

let quoteSpace = document.querySelector(".quote-space");



button.addEventListener("click", function(){
    quoteSpace.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]
})

