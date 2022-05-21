let opcao = 1;

let streaming = [
    {
        nome: "Amazon Prime",
        mensalidade: 32.00,
    },
    {
        nome: "HBO",
        mensalidade: 42.00,

    },
    {
        nome: "Disney Plus",
        mensalidade: 50.00,
    }
];


switch(opcao){
    case 0:
    console.log(streaming[0]);
    break;

    case 1:
    console.log(streaming[1]);
    break;

    case 2:
    console.log(streaming[2]);
    break;

    default:
        console.log("Opção Inválida");
        
}