//Exercise 1: 
let address = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
console.log(`O usuário mora em ${address.cidade} / ${address.uf}, no bairro ${address.bairro},
na rua ${address.rua} com nº ${address.numero}.`);
/*---------------------------------------*/

//Exercise 2: 
function even(x, y) {
    for (let i = x; i <= y; i++) {
        i % 2 === 0 ? console.log(i) : false;
    }
}
even(1, 10);

/*---------------------------------------*/
//Exercise 3: 

const hasAbiliity = skills => {
    console.log(skills.includes('Javascript'));  
}
let skills = ["ReactJS", "React Native","Javascript"];
hasAbiliity(skills);

/*---------------------------------------*/

//Exercise 4: 
const caclExp = age => {
    if(age >= 0 && age <= 1){
        console.log('Iniciante');
    } else if (age >= 1 && age <= 3){
        console.log('Intermediário');
    } else if (age >= 3 && age <= 6) {
        console.log('Avançado');
    } else {
        console.log('Jedi Master');
    }
}
caclExp(1);
/*---------------------------------------*/
//Exercise 5: 

const users = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
const showMessage = users => 
   users.forEach(({nome, habilidades}) => 
      console.log(`O ${nome} possui as habilidades: ${habilidades.join(", ")}`));
showMessage(users);