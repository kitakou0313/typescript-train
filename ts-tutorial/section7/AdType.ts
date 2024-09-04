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

// Type Assertion
// （ある程度の制限があるものの）値の型を決定できる
let el = document.querySelector('input[type="text"]')
el.value;
let inputEl = el as HTMLInputElement;
console.log(inputEl.value);
console.log((el as HTMLInputElement).value);

// asでの利用，<>での利用の二種の利用形態がある
inputEl = <HTMLInputElement>document.querySelector('input[type="text"]')

// Type asserctionによるエラー
// 1. Compile time errors
// 互換性のない型間でType Assertionは不可
// 上のAssertionができたのはHTMLInputElementがHTMLElementの子クラスであるため
let priceTS = "9.99"
let netPrice = <number>priceTS;

// 2. Runtime errors
// コンパイル時にエラーにならない場合でも，実行時に取得した値がPropertyを持たずエラーになるケース
// Input Elementのケースではinput.valueが存在せず，undefinedになるなど

// 3. それ以外の予期しない挙動

// 使用には注意が必要そう 子クラス -> 親クラスの逆が可能になるため，2のエラーが容易に起きえそう
