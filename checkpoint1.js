function microondas( prato , tempo =0 ){

//prato 1
    if( prato == 1 && tempo >= 10 && tempo <= 19){
        console.log('Prato 1 pronto, bom apetite!!!');
    }else if ( prato == 1 && tempo >= 20 && tempo <= 29 ){
        console.log('Comida queimou!');
    }else if ( prato == 1 && tempo >= 30){
        console.log('kabumm!!!');
    }else if ( prato == 1 && tempo <=9){
        console.log('Tempo insuficiente.');
    }else {
        
    }

//prato 2
    if(prato ==2 && tempo >= 8 && tempo <= 15){
        console.log('Prato 2 pronto, bom apetite!!!');
    }else if ( prato ==2 && tempo >= 16 && tempo <= 23){
        console.log('Comida queimou!');
    }else if( prato == 2 && tempo >=24){
        console.log('Kabumm!!!');
    }else if ( prato == 2 && tempo <= 7){
        console.log('Tempo insuficiente.');
    }else {
        
    }

// prato 3
    if(prato ==3 && tempo >= 15 && tempo <= 29){
        console.log('Prato 3 pronto, bom apetite!!!');
    }else if ( prato == 3 && tempo >= 30 && tempo <= 44) {
        console.log('Comida queimou!');
    }else if( prato == 3 && tempo >=45){
        console.log('Kabumm!!!');
    }else if ( prato == 3 && tempo <=14){
        console.log('Tempo insuficiente.');
    }else{
        
    }

// prato 4
    if(prato ==4 && tempo >= 12 && tempo <= 23){
        console.log('Prato 4 pronto, bom apetite!!!');
    }else if ( prato == 4 && tempo >= 24 && tempo <= 35) {
        console.log('Comida queimou!');
    }else if( prato == 4 && tempo >=36){
        console.log('Kabumm!!!');
    }else if ( prato == 4 && tempo <=11){
        console.log('Tempo insuficiente.');
    }else{
       
    }
    
// prato 5
    if(prato == 5 && tempo >= 8 && tempo <= 15){
        console.log('Prato 5 pronto, bom apetite!!!');
    }else if ( prato == 5 && tempo >= 16 && tempo <= 23){
     console.log('Comida queimou!');
    }else if( prato == 5 && tempo >=24){
        console.log('Kabumm!!!');
    }else if ( prato == 5 && tempo <= 7){
        console.log('Tempo insuficiente.');
    }else {
        
}

// prato inexistente
    if (prato > 5){
        console.log('Prato Inexistente')
    }else {
        console.log();
    }

}


// //MENU
// //PRATOS:
// PIPOCA = 1 ---- TEMPO SUGERIDO 10 SEGUNDOS
// MACARRÃO = 2 ---- TEMPO SUGERIDO 8 SEGUNDOS
// CARNE = 3 ---- TEMPO SUGERIDO 15 SEGUNDOS
// FEIJÃO = 4 ---- TEMPO SUGERIDO 12 SEGUNDOS
// BRIGADEIRO = 5 ---- TEMPO SUGERIDO 8 SEGUNDOS

microondas( 6 , 10 );