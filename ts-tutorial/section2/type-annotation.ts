// identifierの後にType annotationをつける
let counter: number = 100;
counter = 1;
counter = "string";

// Arrayの場合
// string型の配列のみ代入可
let arrayName: string[] = ["test", "hoge"];
// Objectの場合
// string型のname property, number型のage propertyのみ代入可
let person: {
    name: string,
    age: number
}

// Function
// string型を引数としstring型を返り値とする関数を代入できる変数を定義している
let greeting: (name: string) => string;
greeting = function (name:string) {
    return `Hi, ${name}`
}
