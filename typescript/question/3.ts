interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  let additionalInformation: string;
  // 使用 User 或 Admin 特有的属性就会报错了
  // if ("role" in person) { // 比如 is in  typeof instanceof , 使得typescript GET 当前的类型
  // 将person 断言为准确的类型
  if ((<Admin>person).role) {
  // if (person.role) { 
    additionalInformation = (<Admin>person).role;
    // additionalInformation = person.role;
  } else {
    additionalInformation = (<User>person).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);