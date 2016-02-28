var number;


while(number = parseInt(prompt('Entrez un nombre entre 0 et 999'))){
    var unite = number % 10
    var deci = Math.floor(number % 100 / 10)
    var centi = Math.floor(number % 1000 / 100)
    
    var uniteLetters = ['','un','deux','trois','quatre','cinq','six','sept','huit','neuf'];
    
    var uniteLetters2 = ['dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf']
    
    var deciLetters = ['', 'dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt','quatre-vingt-dix'];

	var centiLetters = ['','cent','deux-cent','trois-cent','quatre-cent','cinq-cent','six-cent','sept-cent','huit-cent','neuf-cent']
    
    if(deci === 1){
        uniteLetters = uniteLetters2
        deci = 0
    }
    
    if(deci === 9){
        deci = deci - 1
        uniteLetters = uniteLetters2
    }
    
    alert(centiLetters[centi] + '-' + deciLetters[deci] + '-' + uniteLetters[unite])
}