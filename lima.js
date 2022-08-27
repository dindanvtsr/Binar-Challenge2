function getSplitName(personName) {
    if(typeof personName != "string") { 
        return 'ERROR : Not a string' 
    }
    else if(typeof personName == "string"){
        const name = personName.split(" ")
        const pName = {}
        if(name.length == 3) {
            pName.firstName = name[0]
            pName.middleName = name[1]
            pName.lastName = name[2]
        }
        else if(name.length == 2) {
            pName.firstName = name.shift()
            pName.middleName = null
            pName.lastName = name.shift()
        }
        else if(name.length == 1) {
            pName.firstName = name[0]
            pName.middleName = null
            pName.lastName = null
        }
        else if(name.length >= 4) {
            return 'Error : This function is only for 3 characters name'
        }
        else {
            return 'Error'
        }
        return pName
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))