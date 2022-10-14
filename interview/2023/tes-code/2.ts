type exampleType1 = {
    name: string
}

interface exampleInterface1 {
    name: string
}

// type exampleType2 = exampleType1 & {
//     age: number
// }

type exampleType2 = exampleInterface1 & {
    age: number
}

interface exampleInterface2 extends exampleType1 {
    age: number
}

interface exampleInterface2 extends exampleInterface1 {
    age: number
}