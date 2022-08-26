function isValidPassword (password) { 
    if (typeof password != "string") { 
        return 'ERROR : Not a string' 
    }
    let rgx = password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/) 
    if (rgx) { 
        return 'true'
    }
    else {
        return 'false' 
    }
} 
 
console.log(isValidPassword('Meong2021')) 
console.log(isValidPassword('meong2021')) 
console.log(isValidPassword('@eong')) 
console.log(isValidPassword('Meong')) 
console.log(isValidPassword(0)) 
console.log(isValidPassword())