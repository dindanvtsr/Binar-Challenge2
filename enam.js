function getAngkaTerbesarKedua(dataAngka) {
    if(dataAngka == null) {
        return 'Error : null'
    }
    else if(dataAngka == 0) {
        return 'Error : Wrong parameter'
    }
    else {
        return dataAngka.sort()[dataAngka.length-2]
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())