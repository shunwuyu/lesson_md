interface IUser {
  name: string;
  age: number;
}

const getUserInfo3 = (user: IUser): string => {
  return `name: ${user.name}, age: ${user.age}`;
};

getUserInfo3({name: "koala", age: 18});