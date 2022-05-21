let carros = [
    {

        modelo: "celta",
        cor: "preto",
        ano: "2014"
    },

    {
        modelo: "uno super-sônico",
        cor: "verde",
        ano: 2022
    },
    
    {
        modelo: "marea bomba",
        cor: "amarelo",
        ano: 2001
    }

]


for (let carro of carros){
    for(propriedade in carro){
        console.log(carro[propriedade]);
    }
}

