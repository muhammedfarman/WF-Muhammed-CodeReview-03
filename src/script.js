
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
var button = document.getElementById("clickme0"),
 count = 125;
button.onclick = function() {
  count += 1;
  button.innerHTML = "LIKE : " + count;
};
var button1 = document.getElementById("clickme1"),
  count1 = 0;
button1.onclick = function() {
  count1 += 1;
  button1.innerHTML = "LIKE : " + count1;
};
var button2 = document.getElementById("clickme2"),
  count2 = 0;
button2.onclick = function() {
  count2 += 1;
  button2.innerHTML = "LIKE: " + count2;
};