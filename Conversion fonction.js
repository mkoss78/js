function conversion(number){
        var un = number % 10
        var deux = Math.floor(number % 100 / 10)
        var trois = Math.floor(number / 100)
        
        number = [lettertrois(trois), letterdeux(deux), letterun(un)];
    	var complet = number.join('-');
    
    	alert(complet)
};

function letterun(number){
    if(number === 0){
        return ''
    }
    if(number === 1){
        return 'un'
    }
    if(number === 2){
        return 'deux'
    }
    if(number === 3){
        return 'trois'
    }
    if(number === 4){
        return 'quatre'
    }
    if(number === 5){
        return 'cinq'
    }
    if(number === 6){
        return 'six'
    }
    if(number === 7){
        return 'sept'
    }
    if(number === 8){
        return 'huit'
    }
    if(number === 9){
        return 'neuf'
    }
}

function letterdeux(number){
    if(number === 0){
        return ''
    }
    if(number === 1){
        return 'dix'
    }
    if(number === 2){
        return 'vingt'
    }
    if(number === 3){
        return 'trente'
    }
    if(number === 4){
        return 'quarente'
    }
    if(number === 5){
        return 'cinquante'
    }
    if(number === 6){
        return 'soixante'
    }
    if(number === 7){
        return 'soixante-dix'
    }
    if(number === 8){
        return 'quatre-vingt'
    }
    if(number === 9){
        return 'quatre-vingt-dix'
    }
}

function lettertrois(number){
    if(number === 0){
        return ''
    }
    if(number === 1){
        return 'cent'
    }
    if(number === 2){
        return 'deux-cent'
    }
    if(number === 3){
        return 'trois-cent'
    }
    if(number === 4){
        return 'quatre-cent'
    }
    if(number === 5){
        return 'cinq-cent'
    }
    if(number === 6){
        return 'six-cent'
    }
    if(number === 7){
        return 'sept-cent'
    }
    if(number === 8){
        return 'huit-cent'
    }
    if(number === 9){
        return 'neuf-cent'
    }
}
    
while(number = parseInt(prompt('Entrez un nombre entre 0 et 999'))){
    conversion(number)
}
