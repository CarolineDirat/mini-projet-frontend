const plus = document.querySelector(".fa-plus"); // bouton "plus" devant "Servings:"
const minus = document.querySelector(".fa-minus"); // bouton "moins" devant "Servings:"

// contenu textuel de l'élément HTML où est indiqué le nombre de parts de la recette
const number = document.getElementById("number"); 

// quand on clique sur l'icône "+", le nombre de parts est incrémenté de 1
plus.addEventListener("click", function(){
	number.textContent = Number(number.textContent) + 1;
});

// quand on clique sur l'icône "+", le nombre de parts est décrémenté de 1
minus.addEventListener("click", function(){
	if(Number(number.textContent)>0) {
		number.textContent = Number(number.textContent) - 1;
	}
});
