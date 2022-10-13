type User = {
   id: number;
   kind: string; 
}

// function makeCustomer<T extends User>(u: T):T {
//     return {
//         id: u.id,
//         kind: 'customer'
//     }
// }
// 解题一
// function makeCustomer<T extends User>(u: T):User {
//     return {
//         id: u.id,
//         kind: 'customer'
//     }
// }

function makeCustomer<T extends User>(u: T):T {
    return {
        ...u,
        id: u.id,
        kind: 'customer'
    }
}