function checkEmail(email) {
    if (typeof email != "string") { 
        return 'Error : Not a string' 
    }
    let regex = email.match(/^[a-zA-Z0-9._-]{2,}$/) 
    if(regex) {
        return 'Error : Invalid email format'
    }
    let rgx = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) 
    if (rgx) { 
        return 'VALID'
    }
    else {
        return 'INVALID' 
    }
}

console.log(checkEmail('apranata@binar.co.id'))
console.log(checkEmail('apranata@binar.com'))
console.log(checkEmail('apranata@binar'))
console.log(checkEmail('apranata'))
console.log(checkEmail(3322))
console.log(checkEmail())