//1
let exo1 = document.querySelector('h1');

exo1.addEventListener('click', () => {
    exo1.classList.add("text-blue");
})

//2
let exo2 = document.querySelector('h3');

exo2.addEventListener("dblclick", () => {
    exo2.className = "text-error";
})

//3
let p = document.querySelector('p');

p.addEventListener('click', () => {
    p.classList.toggle("text-style");
})

//4
let span = Array.from(document.querySelectorAll('p')[1].children);

span.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle("bolder")
    })
})

//5

// methode "dynamique"

let y = Array.from(document.querySelectorAll('p')[2].children);

y.forEach((element, i) => {
    element.addEventListener('click', () => {
        switch (i) {
            case 0:
                y[i+1].classList.remove("bolder-red");
                y[i+2].classList.remove("bolder-red");
                break;
            case 1:
                y[i-1].classList.remove("bolder-red");
                y[i+1].classList.remove("bolder-red");
                break;
            case 2:
                y[i-1].classList.remove("bolder-red");
                y[i-2].classList.remove("bolder-red");
                break;
            default:
                break;
        }
        y[i].classList.add("bolder-red");
    });
});

// methode dynamique (pour de vrai)

let lespan2 = Array.from(document.querySelectorAll("p")[2].children)

lespan2.forEach(el => {
    el.addEventListener("click", () => {
        lespan2.forEach(el => {
            el.classList.remove("bolder-red")
        });
        el.classList.add("bolder-red")
    })
})