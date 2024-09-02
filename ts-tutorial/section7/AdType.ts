// Intersection Type
// 既存の型を組み合わせ，二つのpropertyを両方持つ型を定義
type TypeA = number;
type TypeB = string;

type TypeAB = TypeA & TypeB

interface BussinesPartner {
    name: string;
    credit: number;
}

interface Indentity {
    id: number;
    name:string;
}

interface ContactIF {
    email: string;
    phone: string;
    // name: number; 重複するとnever型にする
}


type IntersectionEmployee = Indentity & ContactIF;

let e:IntersectionEmployee = {
    id: 100,
    name: "John Doe",
    email: "john@example.com",
    phone: "123456"
}
