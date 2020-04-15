function greeter(person: string) { // 打招呼类
  return "Hello, " + person;
}

let user = "Jane User";
document.body.innerHTML = greeter(user);