export function gronsfeldCipher(chars, key){
    var inChars=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var newDiv='<b>Resultado:</b><br>';
    var splitKey=key.split('');
    var splitCleanKey=new Array();
    for(let i=0; i<splitKey.length; i++){
        if (splitKey[i] in new Array('1','2','3','4','5','6','7','8','9','0')){
            splitCleanKey.push(inChars[parseInt(splitKey[i])]);
        }
    }
    let lowerChar
    let lowerKey
    let textLoc
    let keyLoc
    let sub
    var splitChars=chars.split('');
    if (splitCleanKey.length==0){
        newDiv='<b>Resultado:</b><br>Clave no valida.'
    }else{
        newDiv+='<textarea id="gronsfeldCipherResult" rows="5" cols="100" style="font-family:Arial">';
        let keyPos=0;
        for(let i=0; i<splitChars.length; i++){
            lowerChar=splitChars[i].toLowerCase();
            lowerKey=splitCleanKey[keyPos];
            if (inChars.indexOf(lowerChar)>-1){
                textLoc=inChars.indexOf(lowerChar);
                keyLoc=inChars.indexOf(lowerKey);
                sub=inChars[(textLoc+keyLoc)%26];
                if (lowerChar==splitChars[i]){
                    newDiv+=sub;
                }else{
                    newDiv+=sub.toUpperCase();
                }
                keyPos+=1;
                if (keyPos==splitCleanKey.length){
                    keyPos=0;
                }
            }else{
                newDiv+=splitChars[i];
            }
        }
        newDiv+='</textarea>';
    }

    console.log(newDiv);
}

export const encrypt = ( chars, key) => {
    const inChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var splitChars= chars.split('')
    let splitKeys = key.split('')
    let encryptedMessage = ''
    let splitCleanKey = []
    let lowerChar
    let lowerKey
    let keyPos=0
    let textLoc
    let keyLoc
    let sub

    for(let i=0; i<splitKeys.length; i++){
        if (splitKeys[i] in ['1','2','3','4','5','6','7','8','9','0']){
            splitCleanKey.push(inChars[parseInt(splitKeys[i])]);
        }
    }
    for(let i=0; i<splitChars.length; i++){
        lowerChar=splitChars[i].toLowerCase();
        lowerKey=splitCleanKey[keyPos];
        if (inChars.indexOf(lowerChar)>-1){
            textLoc=inChars.indexOf(lowerChar);
            keyLoc=inChars.indexOf(lowerKey);
            sub=inChars[(textLoc+keyLoc)%26];
            if (lowerChar==splitChars[i]){
                encryptedMessage+=sub;
            }else{
                encryptedMessage+=sub.toUpperCase();
            }
            keyPos+=1;
            if (keyPos==splitCleanKey.length){
                keyPos=0;
            }
        }else{
            encryptedMessage+=splitChars[i];
        }
    }
    console.log(encryptedMessage);
}