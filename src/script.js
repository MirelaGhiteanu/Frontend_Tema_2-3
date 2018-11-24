const task1 = document.getElementById('img1');
const task2 = document.getElementById('a1');


task1.addEventListener("click",function(e){
    if (task2.paused) {
        task2.play();
    }
    else {
        task2.pause();
    }

});


const sections = document.querySelectorAll('section');

sections.forEach(function(section) {
    window.addEventListener('scroll', function(e) {
        let coords = section.getBoundingClientRect();
        const windowH = window.innerHeight;
        if ((coords.bottom > windowH / 2) || (coords.top < windowH / 2)) {

            section.style.background = 'white';
        }
        if ((coords.bottom < windowH / 2) || (coords.top > windowH / 2)) {

            section.style.background = 'initial';
        }

    });

});


function generateText() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 400; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const b1 = document.getElementById("b1");

b1.addEventListener("click", function(e) {

    var a1 = document.createElement('article');
    var txt = document.createTextNode("This is the text in the new article");
    const b2 = document.createElement('button');
    b2.innerHTML = "Insert new section";
    b2.style.width = "10%";
    var s1 = document.createElement('section');
    var txt2 = document.createTextNode("This is the text in the new section");
    var txt3 = generateText();

    a1.appendChild(txt);
    a1.prepend(b2);


    var art1 = document.getElementById("art1");
    art1.before(a1);


    b2.addEventListener("click", function(e) {
        s1.innerHTML = txt3;
        b2.before(s1);
    });

});


