function readTextFile(file)
{
    fetch(file)
      .then(response => response.text())
      .then(otext => {
          var text = otext;
          var cont = 0;
          var contvalidos = 0;
            while(text!==""){
                var index = text.indexOf("\n\r\n");
                var aux = text.slice(0,index);   
                text = text.slice(index+3,text.length);   
                //Aqui analizamos aux:
                var booleanArray = {
                    byr: false,
                    iyr: false,
                    eyr: false,
                    hgt: false,
                    hcl: false,                    
                    ecl: false,
                    pid: false,
                    cid: false                   
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
                    booleanArray[campo.slice(0,campo.indexOf(':'))] = true;
                    if(indexaux===-1)break;
                }
                let c = 0;
                if(booleanArray['cid']===false){
                    c++;
                }
                // for (const property in booleanArray) {
                //     console.log(`${property}: ${object[property]}`);
                //   }
                for (const property in booleanArray){
                    if (booleanArray[property] === true){
                        c++;
                    }
                }
                if(c===8){
                    contvalidos++;
                }
                if(index === -1)break;                
                //console.log(c, "aea");
            }
            console.log(cont);
            console.log(contvalidos);
        });
}

function boton(){
   readTextFile("input2.txt");
   readTextFile("input1.txt");
}
