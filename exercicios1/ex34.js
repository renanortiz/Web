function comparar (string1, string2) {
    let igual = true
    for (let i = 0; i < string1.length; i++) {
        let caracterString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caracterString2 = string2.charAt(j).toLowerCase()
            if (caracterString1 == caracterString2) {
                igual = true
                break
            } else {
                igual = false;
            }
        }
        if (!igual) {
            return igual
        }
    }
    return igual
}

console.log(comparar('abCdE', 'CdBaeE'))
console.log(comparar('abCfdE', 'CdBaeE'))