/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string;

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/




enum FavoriteColor {
  BLUE = "Blue",
  PINK = "Pink",
  YELLOW = "Yellow",
  GREEN = "Green",
  RED = "Red",
  PURPLE = "Purple",
}


type Person = {
  name: string,
  age: number,
  favoriteColor: FavoriteColor
}


const user1 : Person = {
  name: "Grazi",
  age: 26,
  favoriteColor: FavoriteColor.PINK
}
const user2 : Person = {
  name: "Bia",
  age: 24,
  favoriteColor: FavoriteColor.BLUE
}
const user3 : Person = {
  name: "Sofia",
  age: 7,
  favoriteColor: FavoriteColor.YELLOW
}
