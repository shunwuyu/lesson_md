// const csv = `name,age,parent
// Bob,30,David
// David,60,
// Anna,10,Bob`;

// const processor = (data, delimiter = ',') => {
//     const titlesData = data.slice(0, data.indexOf('\n'));
//     const titles = titlesData.split(delimiter);
//     // console.log(titles)
//     const rows = data
//         .slice(data.indexOf('\n') + 1)
//         .split('\n')
//     // console.log(rows);
//     const rowData = rows.map(v => {
//         const values = v.split(delimiter);
//         return titles.reduce((obj, title, index) => {
//             if (values[index]) {
//                 obj[title] = values[index]
//             } else {
//                 obj[title] = ''
//             }
//             return obj
//         }, {})
//         // return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
//     })
    
//     return rowData.map( row => {
//         let person = {
//             ...row
//         };
//         // console.log(person, '////')
//         let parents = rowData.filter( v => v.name == row.parent)
//         let children = rowData.filter(v => v.parent == row.name);
//         if (parents.length) {
//             person['parent'] = parents.map(parent => ({
//                 name: parent.name,
//                 age: parent.age
//             }))
//         } else {
//             person['parent'] = []
//         }
//         if (children.length) {
//             person['children'] = children.map(child => ({
//                 name: child.name,
//                 age: child.age
//             }))
//         } else {
//             person['children'] = []
//         }
//         return person;
//     })

// }

// console.log(processor(csv));