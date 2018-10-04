var numeros = ['A', '2','3','4','5','6','7','8','9','10', 'J', 'Q' ,'K' ];
var palos = [' picas', ' corazones', ' treboles', ' diamantes'];


function createBaraja(){
    let baraja = [];
    
    for(var index=0; index<numeros.length;index++){
        baraja[index]=[];
    }

    for(var i=0; i<numeros.length;i++){
        for(var j=0; j<palos.length;j++){   
            baraja[i][j]=numeros[i]+palos[j];
        }    
    }
    return baraja;
}

function includesRojas(i,j){
    var bool;
    baraja=createBaraja();
    if((baraja[i][j].includes("corazones")==true)||(baraja[i][j].includes("diamantes")==true)){
        bool=true;
    }
    else{
        bool=false;
    }
    return bool;
}

function cartasRojas(){
    let rojas =[];
    let k=0;
    baraja = createBaraja();
    for(var j=0; j<palos.length;j++){   
        if(includesRojas(0,j)==true){
            for(i=0;i<numeros.length;i++){
                rojas[k++]=baraja[i][j];
            }
        }
    }
    return rojas;
}

console.log(cartasRojas());