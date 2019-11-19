
const number = document.getElementById("number"); // l'élément HTML où est indiqué le nombre de personne devant "Servings:"

// quand on clique sur l'icône "+", le nombre de personne est incrémenté de 1
document.querySelector(".fa-plus").addEventListener("click", function(){
	number.textContent = Number(number.textContent) + 1;
});


// quand on clique sur l'icône "+", le nombre de personne est décrémenté de 1
document.querySelector(".fa-minus").addEventListener("click", function(){
	if(Number(number.textContent)>0) {
		number.textContent = Number(number.textContent) - 1;
	}
});
