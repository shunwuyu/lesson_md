var obj = {
    name: 'luffyzh',
    email: 'luffyzh@163.com',
    say() {
      console.log(this.name);
    }
}

console.log(Object.getOwnPropertyDescriptors(obj));