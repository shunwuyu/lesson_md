import chalk from "chalk"

// 这里需要补全
const users: unknown[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
]

// 这里需要补全
function logPerson(user: unknown) {
  console.log(` - ${chalk.green(user.name)}, ${user.age}`)
}

console.log(chalk.yellow("Users:"))
users.forEach(logPerson)