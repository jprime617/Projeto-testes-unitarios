function add (x,y) {
    return(x + y)
}

function sub (x,y) {
    return(x - y)
}

function mult (x,y) {
    return(x * y)
}

function div (x,y) {
    if(x == 0 || y == 0) {
        return ("Calma lá Paizao")
    }
    return(x / y)
}

module.exports = {add, sub, mult, div}