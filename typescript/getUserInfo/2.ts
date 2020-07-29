const getUserInfos = (user: {name: string, age: number}): string => {
  return `name: ${user.name} age: ${user.age}`;
};

getUserInfos({name: "kaola", age: 12});