// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
// ### 2. Au double clique du h3, rajoute la class text-error
// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

let h1 = document.querySelector('h1');

h1.addEventListener('click' , () => {
    h1.classList.add('text-blue');
})

let h3 = document.querySelector('h3');

h3.addEventListener('dblclick' , () => {
    h3.classList.add('text-error');
});
//3
let p = document.querySelector('p');

p.addEventListener('click' , () => {
    if (p.className == 'text-style') {
        p.classList.remove('text-style')
    } else {
        p.classList.add('text-style')
    }
});

let exo3Un = document.querySelectorAll('span')[0];
let exo3Deux = document.querySelectorAll('span')[1];
let exo3Trois = document.querySelectorAll('span')[2];

exo3Un.addEventListener('click', () => {
    exo3Un.classList.add('bolder');
});

exo3Deux.addEventListener('click', () => {
    exo3Deux.classList.add('bolder')
})

exo3Trois.addEventListener('click', () => {
    exo3Trois.classList.add('bolder')
})


let exo4Un = document.querySelectorAll('span')[3];
let exo4Deux = document.querySelectorAll('span')[4];
let exo4Trois = document.querySelectorAll('span')[5];

exo4Un.addEventListener('click', () => {
    if (p.style.cssText == 'color: gold; background-color: blue;') {
        p.setAttribute('style' , 'color: black; background-color:white');
    } else {
        p.setAttribute('style', 'color: gold; background-color: blue');
        console.log(p.style.cssText);
    } 
})


//cOrrection
//1
let exo1 = document.querySelector('h1');

exo1.addEventListener('click' , () => {
    exo1.classList.add('text-blue');
});

//2
let exo2 = document.querySelector('h3');
exo2.addEventListener('dblclick' , () => {
    exo2.className = 'text-error';
});

//3
let exo3 = document.querySelector('p');

exo3.addEventListener('click' , () => {
    exo3.classList.toggle('text-style');
});

//toggle; rajoute une classe, si la classe est deja là, elle la suprime. ne fonctionne qu'avec la classe pas avec le style

//4
let span = Array.from(document.querySelectorAll('p')[1].children);

span.forEach(element => {
    element.addEventListener('click' , () => {
        element.classList.toggle('bolder');
    })
});

//5
let y = Array.from(document.querySelectorAll('p')[2].children);

y.forEach((element,index) => {
    element.addEventListener('click', () => {
        switch (index) {
            case 0:
                y[index+1].classList.remove('bolder-red')
                y[index+2].classList.remove('bolder-red')
                break;
            case 1:
                y[index-1].classList.remove('bolder-red')
                y[index+1].classList.remove('bolder-red')
                break
            case 2:
                y[index-1].classList.remove('bolder-red')
                y[index-2].classList.remove('bolder-red')
                break
            default:
                break;
        }
        t[index].classList.add('bolder-red');
    })
});

