// Type aliase
// 既存の型名に別の名称を付けられる
// primitive type, object type, union type, intersection type, function type

// Primitiveの場合

// object type
type Person = {
    name: string, 
    age: number
}

let John: Person;
John = {
    name: "John",
    age: 30
}

// union type
type alphanumeric = string | number;
let input: alphanumeric;
input = 10
input = "string"

// Intersection type
type Contact = {
    email: string,
    phone: string
}

type Candidate = Person & Contact
let Paul: Candidate;
Paul = John
