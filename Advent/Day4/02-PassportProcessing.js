function readTextFile(file)
{
    fetch(file)
      .then(response => response.text())
      .then(otext => {
          var text = otext;
          var cont = 0;
          var contvalidos = 0;
          var arrga = {
            byr: 0,
            iyr: 0,
            eyr: 0,
            hgt: 0,
            hcl: 0,                    
            ecl: 0,
            pid: 0,
            cid: 0   
          };
            while(text!==""){
                var index = text.indexOf("\n\r\n");
                var aux = text.slice(0,index);   
                text = text.slice(index+3,text.length);   
                //Aqui analizamos aux:
                var booleanArray = {
                    byr: null,
                    iyr: null,
                    eyr: null,
                    hgt: null,
                    hcl: null,                    
                    ecl: null,
                    pid: null,
                    cid: null                   
                };
                while(aux.indexOf("\n") !== -1){
                    aux = aux.replace("\n", " ");
                }                
                //console.log(aux);
                cont++;
                while(aux){
                    var indexaux = aux.indexOf(' ');                    
                    var campo = aux.slice(0,indexaux);
                    aux = aux.slice(indexaux+1, aux.length);
                    booleanArray[campo.slice(0,campo.indexOf(':'))] = campo.slice(campo.indexOf(':')+1,campo.length);
                    if(indexaux===-1)break;
                }
                let c = 0;
                if(booleanArray['byr'] !== null){
                    if(booleanArray['byr'].length ===4){
                        for (let indexga = 1920; indexga < 2003; indexga++) {
                            if(booleanArray['byr'] === indexga.toString()){
                                c++;
                                arrga['byr']++;
                            }                        
                        }
                    }
                    // if(parseInt(booleanArray['byr'])>=1920 && parseInt(booleanArray['byr']) <=2002){
                    //     c++;
                    //     arrga['byr']++;                        
                    // }
                }
                
                if(booleanArray['iyr'] !== null){
                    if(booleanArray['iyr'].length ===4){
                        for (let indexga = 2010; indexga < 2021; indexga++) {
                            if(booleanArray['iyr'] === indexga.toString()){
                                c++;
                                arrga['iyr']++;
                            }                        
                        }
                    }
                    // if(parseInt(booleanArray['iyr'])>=2010 && parseInt(booleanArray['iyr']) <=2020){
                    //     arrga['iyr']++;
                    //     c++;                        
                    // }
                }
                
                if(booleanArray['eyr'] !== null){
                    if(booleanArray['eyr'].length ===4){
                        for (let indexga = 2020; indexga < 2031; indexga++) {
                            if(booleanArray['eyr'] === indexga.toString()){
                                c++;
                                arrga['eyr']++;
                            }                        
                        }
                    }
                    // if(parseInt(booleanArray['eyr'])>=2020 && parseInt(booleanArray['eyr']) <=2030){
                    //     c++;
                    //     arrga['eyr']++;                        
                    // }
                }

                if(booleanArray['hgt']!==null){
                    
                    if(booleanArray['hgt'][booleanArray['hgt'].length-2]==='c' && booleanArray['hgt'][booleanArray['hgt'].length-1]==='m'){
                        var auxga = booleanArray['hgt'].slice(0,booleanArray['hgt'].indexOf("c"));
                        if(auxga.length ===3){
                            for (let indexga = 150; indexga < 194; indexga++) {
                                if(auxga===indexga.toString()){
                                    c++;
                                    arrga['hgt']++;
                                }
                            }
                        }
                        // var auxga = parseInt(booleanArray['hgt'].slice(0,booleanArray['hgt'].indexOf("c")));
                        // if (auxga>=150 && auxga<=193){
                        //     arrga['hgt']++;
                        //     c++;
                        // }
                    }
                    else if(booleanArray['hgt'][booleanArray['hgt'].length-2]==='i' && booleanArray['hgt'][booleanArray['hgt'].length-1]==='n'){
                        var auxga = booleanArray['hgt'].slice(0,booleanArray['hgt'].indexOf("i"));
                        if(auxga.length ===2){
                            for (let indexga = 59; indexga < 77; indexga++) {
                                if(auxga===indexga.toString()){
                                    c++;
                                    arrga['hgt']++;
                                }
                            }
                        }
                        
                        // var auxga = parseInt(booleanArray['hgt'].slice(0,booleanArray['hgt'].indexOf("i")));
                        // if(auxga>=59 && auxga <=76){
                        //     arrga['hgt']++;
                        //     c++;
                        // }
                    }
                }     
                           
                if(booleanArray['hcl']!==null){
                    if(booleanArray['hcl'][0]==='#' && booleanArray['hcl'].length === 7){
                        var laputamadrenosquedamossinvariables = true;
                        for (let i = 1; i < booleanArray['hcl'].length; i++) {                        
                            var letra = booleanArray['hcl'].charCodeAt(i);
                            if(!((letra >= 48 && letra<= 57) || (letra>=97 && letra <=102))){
                                laputamadrenosquedamossinvariables=false;
                                break;
                            }
                        }
                        if(laputamadrenosquedamossinvariables === true){
                            arrga['hcl']++;
                            c++;
                        }
                    }
                }
                
                if(booleanArray['ecl']!==null){
                    if(booleanArray['ecl'].length === 3){
                        if(booleanArray['ecl']==="amb"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="blu"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="brn"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="gry"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="grn"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="hzl"){
                            c++;
                            arrga['ecl']++;
                        }
                        else if(booleanArray['ecl']==="oth"){
                            c++;
                            arrga['ecl']++;
                        }
                    }
                }
                
                if(booleanArray['pid']!==null){                    
                    if(booleanArray['pid'].length===9){
                        var laputamadrenosquedamossinvariablesremastered = true;
                        for (let indexaux = 0; indexaux < booleanArray['pid'].length; indexaux++) {
                            var letra = booleanArray['pid'].charCodeAt(indexaux);
                            if(!(letra >= 48 && letra<= 57)){
                                laputamadrenosquedamossinvariablesremastered=false;
                                break;
                            }
                        }
                        if (laputamadrenosquedamossinvariablesremastered ===true){
                            c++;
                            arrga['pid']++;
                        }
                    }                    
                }
                if(c===7){
                    contvalidos++;
                }
                if(index === -1)break;   
            }
            console.log(arrga);
            console.log(cont);
            console.log(contvalidos);
        });
}

function boton(){
   readTextFile("input2.txt");
   readTextFile("input1.txt");
}
