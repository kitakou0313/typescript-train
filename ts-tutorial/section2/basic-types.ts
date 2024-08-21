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
// object型かつpropertyを定義する場合の特別な例
let vacant: {} = {};
// propetyを持たないので下記はコンパイル時にエラー
vacant.hoge
// Object型なので以下は実行可能
vacant.toString()
