/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//1.1

// type TPerson = {
//   id: string,
//   name: string,
//   email: string,
//   password: string,
//   role: "Admin" | "Normal"
// }

// const userOne : TPerson = {
//   id: "01",
//   name: "Grazi",
//   email: "grazi@email.com",
//   password: "123456",
//   role: "Normal"
// }

// console.table(userOne)

// const userTwo : TPerson = {
//   id: "02",
//   name: "Murilo",
//   email: "urilo@email.com",
//   password: "234567",
//   role: "Admin" 
// }

// console.table(userTwo)


//1.2

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}

type AdminAccount = {
  account: string | number,
  permission: boolean
}

type NormalAccount = {
  account: string | number,
  permission: boolean
}



/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

//2.1. Enum com valores ADMIN e NORMAL;

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal",
}

const userOne : TPerson = {
  id: "01",
  name: "Grazi",
  email: "grazi@email.com",
  password: "123456",
  role: Role.ADMIN //Precisa ser embaixo do enum
}

// console.table(userOne)

const userTwo : TPerson = {
  id: "02",
  name: "Murilo",
  email: "urilo@email.com",
  password: "234567",
  role: Role.NORMAL
}

// console.table(userTwo)

//2.2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type AdminUser = TPerson & AdminAccount

const userThree:AdminUser = {
  id: "03",
  name: "Beatriz",
  email: "beatriz@email.com",
  password: "193894",
  role: Role.ADMIN,
  account: "admin1",
  permission: true,
}


type NormalUser = TPerson & NormalAccount

const userFour:NormalUser = {
  id: "04",
  name: "Vovó",
  email: "vovó@email.com",
  password: "8393894",
  role: Role.NORMAL,
  account: "normal1",
  permission: false,
}

//2.3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

const arrayUsers: AdminUser[] | NormalUser[] = [userThree, userFour]

//2.4. Crie duas pessoas, uma com permissão normal e a outra admin;

//2.5. Guarde essas pessoas no array de usuários.

arrayUsers.push(userThree)
arrayUsers.push(userFour)

console.log(arrayUsers)