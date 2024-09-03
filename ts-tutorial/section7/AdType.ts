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

// Type Guard
// conditional block(if文など)を使い変数の型を絞る機能
type alphanumericTypeGuard = string | number;

function addTypeGuard(a: alphanumericTypeGuard, b: alphanumericTypeGuard) {
    // if文内のtypeof operatorによりブロック内ではa, bの型がnumberに絞られている
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    // if文内のtypeof operatorによりブロック内ではa, bの型がstringに絞られている
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
