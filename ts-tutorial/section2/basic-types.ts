// number type
let price: number;
price = 1000
// 小数も含む
price = 1.1
// 2進数，16進数も可能
let bin = 0b1;

// string type
let firstName:string;
firstName = "hoge";
firstName = `
 hogehoge
`
firstName = `${price}`


// boolean
let flag: boolean;
flag = false;
flag = !(flag)
// Boolean typeがあるがこれはJavaScriptのもの

// obeject type
// primitive型以外の全ての値に該当するType
// primitive型の一覧
// number, bigint, string, boolean, null, undefined, symbol
let employee: object;
employee = {
    firstName: "hoge",
    lastName: "fuga"
}
employee = {
    firstName2: "hoge",
    lastName: "fuga"
}

// 定義時に持つPropertyと型を定められる
// 基本こちらを使う方がよさそう（異なるPropertyをもつ値の代入を防げる　上はできない）
let employee2: {
    firstName: string,
    lastName: string
};
employee2 = {
    firstName: "hoge",
    lastName: "fuga"
}

// primitive型の値は代入できない
employee = 10;
employee2.firstName

// object != Objectなので注意

// empty type
// object型かつpropertyを定義する場合の特別な例っぽい
let vacant: {} = {};
// propetyを持たないので下記はコンパイル時にエラー
vacant.hoge
// Object型なので以下は実行可能
vacant.toString()


// Array types
let skills: string[] = ["Test"];
skills[1] = "Problem solving";
skills.push("HogeHoge");
// 互換性のない型の値の代入を防げる
skills.push(100);
let skill = skills[100];

// JavaScriptのpropertyもアクセス可能
console.log(skills.length)
let series = [1,2,3];
let double = series.map((e) => {e*2});

// 複数の型の値を保持するArray
// Union型になる
let scores = ["HogeHuga",1, 2, ["Hoge"]];
// type inferenceすると変数の型もUnion型になる
let score = scores[1];

// Union型の変数で参照できるpropertyはどうなるのか
let scores2 = [[1], ["Hoge"]];
let score2 = scores2[1]
// Array型であることは共通しているのでArray型のlengthが利用できる
score2.length

let scores3 = [1, ["Hoge"]];
let score3 = scores3[1] 
// Object型のものしか使えない
score3.toString

// Union型の変数の場合，共通する型のproperty, methodしか参照できなさそう

// Tuple型
// 要素数，順番，型が一致している制約が追加されたArray型のような型

let skillTuple: [string, number];
skillTuple = ["Math", 100];
skillTuple = [100, "Math"];

let colorTuple: [number, number, number] = [255, 255, 255]
// 型推論させるとArrayが優先される
let color2Tuple = [255, 255, 255]

// ? postfixを使用することでOptionの要素を定義できる
let colorTupleWithOptional: [number, number, number, number?]
colorTupleWithOptional = [255, 255, 255]
colorTupleWithOptional = [255, 255, 255, 1]

