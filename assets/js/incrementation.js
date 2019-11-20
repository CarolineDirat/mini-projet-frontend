const plus = document.querySelector(".fa-plus"); // bouton "plus" devant "Servings:"
const minus = document.querySelector(".fa-minus"); // bouton "moins" devant "Servings:"

// contenu textuel de l'élément HTML où est indiqué le nombre de parts de la recette
const number = document.getElementById("number").textContent; 

// quand on clique sur l'icône "+", le nombre de personne est incrémenté de 1
plus.addEventListener("click", function(){
	number = Number(number) + 1;
});

// quand on clique sur l'icône "+", le nombre de personne est décrémenté de 1
minus.addEventListener("click", function(){
	if(Number(number)>0) {
		number = Number(number) - 1;
	}
});
