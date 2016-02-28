var age = parseInt(prompt('Quel est votre age?'));

if(age > 1 && age < 18){
    alert("Vous n'êtes pas encore majeur");
}
else if(age > 17 && age < 50){
    alert("Vous êtes majeur mais pas encore senior");
}
else if(age > 49 && age < 60){
    alert("Vous êtes senior mais pas encore retraité");
}
else if(age > 59 && age < 121){
    alert("Vous êtes retraité, profitez de votre temps libre !");
}
else{
	alert("Age non valide")};