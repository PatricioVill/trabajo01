const calculadora = {
    sumar : function(a,b){
        return a + b
    },
    restar :function(a,b){
        return a - b 
    },
    multiplicar : function(a,b){
        return a * b
    },
    dividir :function(a,b){
        if(b === 0){
            return "no se puede vividir"
        }
        return a / b
    },
}

module.exports = calculadora;
