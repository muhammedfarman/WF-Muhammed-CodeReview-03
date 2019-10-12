
var movies = [];
movies = movie;
//input function//
function output() {
    let card = document.createElement("div");
    let info = document.createElement("P");
    info.setAttribute("class", "title")
    info.innerHTML = movie[i].title + movie[i].info;
    card.setAttribute("class", "cards");
    card.appendChild(info);
    let element = document.getElementById("container");
    element.appendChild(card);
    let x = document.createElement("img");
    x.setAttribute("class", "poster");
    x.setAttribute("src", movie[i].img);
    x.setAttribute("alt", movie[i].title);
    card.appendChild(x);
    l = movie[i].likes;
    let counter = document.createElement("button");
    counter.setAttribute("class", "counter");
    counter.setAttribute("id", "clickme" + movie[i].id);
    counter.setAttribute("value", movie[i].id);
    counter.innerHTML = "LIKE : " + l;
    info.appendChild(counter);

}

//LOAD input from json//
for (var i = 0; i < movie.length; i++) {
    output();
}


// like clicks counter//
let buttons = document.querySelectorAll('.counter');
like(buttons);
function like() {
    for (let but of buttons) {
        but.addEventListener('click', (e) => {
            let x = e.target.attributes[2].value;
            let ct = e.target.parentNode.children[0];
            let c = e.target.parentNode.children[0].innerText.split(" ")[2];
            c++;
            ct.innerHTML = "LIKE : " + c;
        })
    };
}
// end like clicks counter//


